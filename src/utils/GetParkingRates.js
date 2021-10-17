import * as SQLite from "expo-sqlite";
db = SQLite.openDatabase("cp.db");

export default class ParkingRates {
  vehicles() {
    console.log("getting parking rates");
    const centralArea = [
      "ACB",
      "BBB",
      "BRB1",
      "CY",
      "DUXM",
      "HLM",
      "KAB",
      "KAM",
      "PRM",
      "SLS",
      "SR1",
      "SR2",
      "TPM",
      "UCS",
      "WCB",
    ];
    var today = new Date();
    var hours = today.getHours();
    var day = today.getDay();
    var minutes = today.getMinutes();
    var time = hours * 100 + minutes;

    db.transaction((tx) => {
      tx.executeSql("SELECT * FROM nearbyCpInfo", [], (tx, results) => {
        for (var i = 0; i < results.rows._array.length; i++) {
          const cpInfo = results.rows._array[i];
          var cParkingRateRN = -1;
          var cParkingRateGeneral = {};

          if (cpInfo["free_parking"] == "SUN & PH FR 7AM-10.30PM") {
            if ((day == 0 || day == 5) && time >= 700 && time <= 2230) {
              cParkingRateRN = 0;
            }
          } else if (cpInfo["free_parking"] == "SUN & PH FR 1PM-10.30PM") {
            if ((day == 0 || day == 5) && time >= 1300 && time <= 2230) {
              cParkingRateRN = 0;
            }
          }
          if (cParkingRateRN == -1) {
            if (centralArea.includes(cpInfo["car_park_no"])) {
              cParkingRateGeneral["MonSat7To5"] = 1.2;
              cParkingRateGeneral["Other"] = 0.6;

              if (hours >= 7 && hours <= 17 && day > 0) {
                cParkingRateRN = 1.2;
              } else {
                cParkingRateRN = 0.6;
              }
            } else {
              cParkingRateGeneral["MonSat7To5"] = 0.6;
              cParkingRateGeneral["Other"] = 0.6;

              cParkingRateRN = 0.6;
            }
          }
          cParkingRateGeneral["free_parking"] = cpInfo["free_parking"];

          db.transaction((tx) => {
            if (cpInfo["y_lots_available"] != null) {
              tx.executeSql(
                "UPDATE nearbyCpInfo SET y_parking_rates_general = ? WHERE car_park_no = ?",
                [0.65, cpInfo["car_park_no"]]
              );
            }
            if (cpInfo["y_lots_available"] != null) {
              tx.executeSql(
                "UPDATE nearbyCpInfo SET h_parking_rates_general = ? WHERE car_park_no = ?",
                [1.2, cpInfo["car_park_no"]]
              );
            }

            tx.executeSql(
              "UPDATE nearbyCpInfo SET c_parking_rates_general = ? WHERE car_park_no = ?",
              [JSON.stringify(cParkingRateGeneral), cpInfo["car_park_no"]]
            );
            tx.executeSql(
              "UPDATE nearbyCpInfo SET c_parking_rates_current=? WHERE car_park_no=?",
              [cParkingRateRN, cpInfo["car_park_no"]]
            );
          });
        }
      });
    });
  }
}
