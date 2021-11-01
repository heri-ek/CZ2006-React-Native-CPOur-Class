import * as SQLite from "expo-sqlite";
import GetLots from "../api/GetLots";
import GetRoute from "../api/GetRoute";
import GetGracePeriod from "../GetGracePeriod";
import GetParkingRates from "../GetParkingRates";
db = SQLite.openDatabase("cpour.db");
/**
 * Manages nearbyCpInfo table in local database to store information of carparks near user's input destination
 */
export default class NearbyCpInfoTable {
  /**
   * Creates new nearbyCpInfo table if not already existing
   */
  createNearbyCpInfoTable() {
    console.log("creating nearbyCpTable");
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS nearbyCpInfo (" +
          "car_park_no character varying(10) PRIMARY KEY," +
          "address character varying(80)," +
          "postal character varying," +
          "car_park_type character varying(40)," +
          "type_of_parking_system character varying(20)," +
          "short_term_parking character varying(30)," +
          "free_parking character varying(30)," +
          "night_parking character varying(30)," +
          "grace_period integer," +
          "lat_long character varying(50)," +
          "total_time integer," +
          "total_distance integer," +
          "c_lots_available integer," +
          "c_parking_rates_current double_precision," +
          "c_parking_rates_general character varying," +
          "h_lots_available integer," +
          "h_parking_rates_general double precision," +
          "y_lots_available integer," +
          "y_parking_rates_general double precision," +
          "route_info character varying," +
          "route_info_from_current character varying);"
      );
    });
  }

  /**
   * Iterates through cpInfo table to find carparks in vicinity of users input destination and stores route info in nearbyCpInfo table
   * @param {string} toLatLong Latitude and longitude values of destination
   * @param {string} currentLatLong Latitude and longitude values of user's current location
   */

  async setTable(toLatLong, currentLatLong) {
    console.log("getting");
    const getLots = new GetLots();
    const lotData = await getLots.getLots();

    /**
     * Gets distance between two points
     * @param {string} toLatLong Latitude and longitude values of end point
     * @param {string} fromLatLong Latitude and longitude values of start point
     * @returns {number} Distance between start and end points in km
     */
    function getDistance(toLatLong, fromLatLong) {
      const deg2rad = (deg) => {
        return deg * (Math.PI / 180);
      };

      var toLatLongSep = toLatLong.split(",");
      var lat1 = parseFloat(toLatLongSep[0]);
      var long1 = parseFloat(toLatLongSep[1]);

      var fromLatLongSep = fromLatLong.split(",");
      var lat2 = parseFloat(fromLatLongSep[0]);
      var long2 = parseFloat(fromLatLongSep[1]);
      // https://stackoverflow.com/questions/18883601/function-to-calculate-distance-between-two-coordinates
      var R = 6371; // Radius of the earth in km
      var dLat = deg2rad(lat2 - lat1);
      var dLong = deg2rad(long2 - long1);
      var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) *
          Math.cos(deg2rad(lat2)) *
          Math.sin(dLong / 2) *
          Math.sin(dLong / 2);
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      var d = R * c; // Distance in km
      return d;
    }

    db.transaction((tx) => {
      tx.executeSql("SELECT * FROM cpInfo;", [], async (tx, results) => {
        // to iterate through every carpark in database, find distance from destination, and store nearby carparks
        const distanceHandler = (low, high) => {
          for (var i = low; i < high; i++) {
            var oneCP = results.rows.item(i);
            var distance = getDistance(toLatLong, oneCP.lat_long);

            if (distance < 0.6) {
              // estimate of nearby carpark (note: distance is not proper route, only straight line)
              const car_park_no = oneCP.car_park_no;
              const address = oneCP.address;
              const car_park_type = oneCP.car_park_type;
              const type_of_parking_system = oneCP.type_of_parking_system;
              const short_term_parking = oneCP.short_term_parking;
              const free_parking = oneCP.free_parking;
              const night_parking = oneCP.night_parking;
              const lat_long = oneCP.lat_long;

              db.transaction((tx) => {
                tx.executeSql(
                  "INSERT INTO nearbyCpInfo (car_park_no, address, car_park_type, type_of_parking_system, short_term_parking, free_parking, night_parking, lat_long)" +
                    "VALUES (?, ?, ?, ?, ?, ?, ?, ?);",
                  [
                    car_park_no,
                    address,
                    car_park_type,
                    type_of_parking_system,
                    short_term_parking,
                    free_parking,
                    night_parking,
                    lat_long,
                  ],
                  (tx, results) => {
                    // console.log(results);
                  }
                );
                // to store distance, time, and other route info

                const getRoute = new GetRoute();
                getRoute.getRoute(
                  lat_long,
                  toLatLong,
                  car_park_no,
                  currentLatLong
                );
                const cpLots = lotData.filter(
                  (d) => d.carpark_number == car_park_no
                );
                if (cpLots.length != 0) {
                  this.setLots(0, car_park_no, cpLots[0]["carpark_info"]);
                }
              });
            }
            if (i == 2161) {
              const getParkingRates = new GetParkingRates();
              const table = "nearbyCpInfo";
              var queries1 = [
                "SELECT * FROM " + table,
                "UPDATE " +
                  table +
                  " SET c_parking_rates_general = ? WHERE car_park_no = ?",
                "UPDATE " +
                  table +
                  " SET c_parking_rates_current = ? WHERE car_park_no = ?",
              ];
              var queries2 = [
                "SELECT * FROM " + table,
                "UPDATE " +
                  table +
                  " SET y_parking_rates_general = ? WHERE car_park_no = ?",
                "UPDATE " +
                  table +
                  " SET h_parking_rates_general = ? WHERE car_park_no = ?",
              ];
              getParkingRates.vehicles(queries1);
              getParkingRates.notCar(queries2);
              const getGracePeriod = new GetGracePeriod();
              getGracePeriod.getGracePeriod(0);
              console.log("done getting");
            }
          }
        };
        distanceHandler(0, 1000);
        setTimeout(() => {
          distanceHandler(1000, 2162);
        }, 500);
      });
    });
  }

  /**
   * Sets lot availability data for every carpark in table
   * @param {number} index 1 for favourites table, 0 for nearbyCpInfo table
   * @param {string} car_park_no Carpark number
   * @param {*} cpLots Lot availability info
   * @param {string} destination_address Address of user's final destination
   */
  setLots(index, car_park_no, cpLots, destination_address) {
    var table = "nearbyCpInfo";
    var addon = "";

    if (index == 1) {
      table = "favourites";
      addon = " AND destination_address=?";
    }
    var queries = [
      "UPDATE " + table + " SET c_lots_available=? WHERE car_park_no=?" + addon,
      "UPDATE " + table + " SET y_lots_available=? WHERE car_park_no=?" + addon,
      "UPDATE " + table + " SET h_lots_available=? WHERE car_park_no=?" + addon,
    ];

    var typeC = cpLots.filter((d) => d.lot_type == "C")[0];
    db.transaction((tx) => {
      var params = [typeC["lots_available"], car_park_no];
      if (index == 1) {
        params = [typeC["lots_available"], car_park_no, destination_address];
      }
      tx.executeSql(
        queries[0],
        params,
        () => {},
        () => {
          console.log("set lots error");
        }
      );

      if (cpLots.length > 1) {
        var typeY = cpLots.filter((d) => d.lot_type == "Y")[0];
        var typeH = cpLots.filter((d) => d.lot_type == "H")[0];
        console.log("Y: ", typeY, car_park_no);

        if (typeY != {} && typeY != undefined) {
          var params = [typeY["lots_available"], car_park_no];
          if (index == 1) {
            params = [
              typeY["lots_available"],
              car_park_no,
              destination_address,
            ];
          }
          tx.executeSql(
            queries[1],
            params,
            () => {},
            () => {
              console.log("set lots error");
            }
          );
        }
        if (typeH != {} && typeH != undefined) {
          var params = [typeH["lots_available"], car_park_no];
          if (index == 1) {
            params = [
              typeH["lots_available"],
              car_park_no,
              destination_address,
            ];
          }
          tx.executeSql(
            queries[2],
            params,
            () => {},
            () => {
              console.log("set lots error");
            }
          );
        }
      }
    });
  }
  /**
   * Recreates nearbyCpInfo table whenever new destination is searched
   */
  recreateNearbyCpInfoTable() {
    db.transaction((tx) => {
      console.log("recreating nearbyCpInfoTable");
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS nearbyCpInfo (" +
          "car_park_no character varying(10) PRIMARY KEY," +
          "address character varying(80)," +
          "postal character varying," +
          "car_park_type character varying(40)," +
          "type_of_parking_system character varying(20)," +
          "short_term_parking character varying(30)," +
          "free_parking character varying(30)," +
          "night_parking character varying(30)," +
          "grace_period integer," +
          "lat_long character varying(50)," +
          "total_time integer," +
          "total_distance integer," +
          "c_lots_available integer," +
          "c_parking_rates_current double_precision," +
          "c_parking_rates_general character varying," +
          "h_lots_available integer," +
          "h_parking_rates_general double precision," +
          "y_lots_available integer," +
          "y_parking_rates_general double precision," +
          "route_info character varying," +
          "route_info_from_current character varying);"
      );

      tx.executeSql("DROP TABLE nearbyCpInfo;");
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS nearbyCpInfo (" +
          "car_park_no character varying(10) PRIMARY KEY," +
          "address character varying(80)," +
          "postal character varying," +
          "car_park_type character varying(40)," +
          "type_of_parking_system character varying(20)," +
          "short_term_parking character varying(30)," +
          "free_parking character varying(30)," +
          "night_parking character varying(30)," +
          "grace_period integer," +
          "lat_long character varying(50)," +
          "total_time integer," +
          "total_distance integer," +
          "c_lots_available integer," +
          "c_parking_rates_current double_precision," +
          "c_parking_rates_general character varying," +
          "h_lots_available integer," +
          "h_parking_rates_general double precision," +
          "y_lots_available integer," +
          "y_parking_rates_general double precision," +
          "route_info character varying," +
          "route_info_from_current character varying);"
      );
    });
  }
}
