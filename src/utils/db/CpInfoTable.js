import * as SQLite from "expo-sqlite";
db = SQLite.openDatabase("cpour.db");
// Create table for carpark info
export default class CpInfoTable {
  createCpInfoTable() {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS cpInfo (" +
          "car_park_no character varying(10) PRIMARY KEY," +
          "address character varying(80)," +
          "x_coord double precision," +
          "y_coord double precision," +
          "car_park_type character varying(40)," +
          "type_of_parking_system character varying(20)," +
          "short_term_parking character varying(30)," +
          "free_parking character varying(30)," +
          "night_parking character varying(30)," +
          "car_park_decks integer," +
          "gantry_height double precision," +
          "car_park_basement character varying(1)," +
          "lat_long character varying(50));"
      );
      tx.executeSql(
        "SELECT COUNT(*) FROM (SELECT 0 FROM cpInfo LIMIT 1)",
        [],
        (tx, results) => {
          if (results.rows.item(0)["COUNT(*)"] == 0) {
            this.populate();
          }
        }
      );
    });
  }

  populate() {
    console.log("populating");
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('ACB','BLK 270/271 ALBERT CENTRE BASEMENT CAR PARK',30314.7936,31490.4942,'BASEMENT CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',1,1.8,'Y','1.3010632720874935,103.85411804993093');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('ACM','BLK 98A ALJUNIED CRESCENT',33758.4143,33695.5198,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',5,2.1,'N','1.321004290105958,103.88506094761526');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('AH1','BLK 101 JALAN DUSUN',29257.7203,34500.3599,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3282834951094042,103.84461988914597');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('AK19','BLOCK 253 ANG MO KIO STREET 21',28185.4359,39012.6664,'SURFACE CAR PARK','COUPON PARKING','7AM-7PM','NO','NO',0,0,'N','1.369091216143557,103.83498485034086');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('AK31','BLK 302/348 ANG MO KIO ST 31',29482.029,38684.1754,'SURFACE CAR PARK','COUPON PARKING','NO','NO','NO',0,0,'N','1.3661204243173264,103.84663563161604');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('AK52','BLOCK 513 ANG MO KIO ST 53',29889.3457,39382.8134,'SURFACE CAR PARK','COUPON PARKING','WHOLE DAY','NO','YES',0,0,'N','1.3724386334422438,103.85029569742512');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('AK6','BLOCK 728 ANG MO KIO AVE 6',29283.7324,39647.8906,'SURFACE CAR PARK','COUPON PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,0,'N','1.374835929453353,103.84485384156172');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('AK83','BLK 5022 TO 5095 ANG MO KIO INDUSTRIAL PARK 2',31397.2241,39851.6191,'SURFACE CAR PARK','COUPON PARKING','NO','NO','NO',0,0,'N','1.3766782086821612,103.86384511310713');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('AK9','ANG MO KIO AVENUE 9',29674.8184,40616.875,'SURFACE CAR PARK','COUPON PARKING','NO','NO','NO',0,0,'N','1.3835990576551416,103.84836808665371');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('AM14','BLK 227 ANG MO KIO ST 23',28777.0707,38973.9528,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',6,2.15,'N','1.368741094555009,103.84030110265232');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('AM16','BLK 256A ANG MO KIO STREET 21',28267.0582,39151.8344,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',2,2.15,'N','1.3703498012136093,103.83571828515707');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('AM18','BLK 308C ANG MO KIO AVE 1',29257.6457,38619.9953,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','NO','NO',3,2.15,'N','1.3655400127862602,103.84461939021944');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('AM19','BLK 260 ANG MO KIO ST 21',28134.9305,38989.9965,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',6,2.15,'N','1.3688861979339517,103.83453102382236');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('AM20','BLK 309B ANG MO KIO ST 31',29421.1502,38526.8611,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3646977329371157,103.84608858611787');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('AM22','BLK 316B ANG MO KIO STREET 31',29595.2539,38514.7606,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3645882914751233,103.84765302635255');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('AM32','BLK 255A ANG MO KIO ST 21',28117.7689,39172.0389,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',2,2.15,'N','1.3705325244610682,103.8343768155435');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('AM43','BLK 455 ANG MO KIO ST 44',30669.2379,38959.5487,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',7,2.15,'N','1.3686107186719911,103.85730354666772');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('AM46','BLK 588 ANG MO KIO STREET 52',30234.4145,39354.0323,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',5,2.15,'N','1.3721783233233986,103.85339638441636');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('AM51','BLK 700 ANG MO KIO AVE 6',29489.025,39103.7605,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.36991500171885,103.84669851649707');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('AM64','BLK 590 ANG MO KIO ST 51',30201.236,39274.274,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3714570202946887,103.8530982460575');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('AM79','BLK 596 ANG MO KIO STREEET 52',30004.2224,39370.6063,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3723282292064205,103.85132794564865');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('AM80','BLK 130A ANG MO KIO ST 12',28950.7223,39184.6976,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',4,2.15,'N','1.3706469901715552,103.84186149048293');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('AM81','BLK 132A ANG MO KIO ST 12',28960.3285,39294.4158,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',4,2.15,'N','1.3716392420558625,103.84194781252431');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('AM96','BLK 352A ANG MO KIO STREET 32',29961.0968,38457.9118,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3640741492788182,103.85094037122893');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('AR1L','3 AND 5 DOVER ROAD',22359.0217,31801.6379,'SURFACE CAR PARK','ELECTRONIC PARKING','NO','NO','NO',0,4.5,'N','1.3038767185244542,103.78263177920367');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('AR1M','BLK 2A DOVER ROAD',22474.205,31687.9608,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2.15,'N','1.3028486840208213,103.7836667743235');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('AR2L','BLK 26 AND 27 DOVER CRESCENT',22194.6359,32026.8288,'SURFACE CAR PARK','ELECTRONIC PARKING','NO','NO','NO',0,0,'N','1.305913234462207,103.7811546551739');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('AR2M','BLK 28 DOVER CRESCENT',22252.486,31896.9749,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',16,2.15,'N','1.3047388928304118,103.78167448932494');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('AR5M','BLK 19A DOVER CRESCENT',22562.8641,32184.9758,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3073435265931934,103.78446333008445');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('AR7L','12 TO 14 DOVER CLOSE EAST',22688.3753,32015.1518,'SURFACE CAR PARK','ELECTRONIC PARKING','NO','NO','NO',0,0,'N','1.305807720561868,103.78559113657052');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('AR7M','BLK 12A DOVER CLOSE EAST',22643.9533,31900.5591,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',7,2.15,'N','1.3047713772680514,103.78519200383909');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('AR9','BLK 20/22/23 DOVER CRESCENT',22448.9368,32178.436,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,0,'N','1.3072843627095632,103.78343964059559');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('AV1','BLK 120/120A/121-127 ALEXANDRA VILLAGE',24649.752,29778.7266,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,4.5,'N','1.2855825549923094,103.80321526415918');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('AV2','BLK 1001/1010 BUKIT MERAH LANE 1/3',24941.5778,29704.4978,'SURFACE CAR PARK','COUPON PARKING','WHOLE DAY','NO','YES',0,0,'N','1.2849112856214289,103.80583744238801');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('A1','BLK 215 ANG MO KIO STREET 22',28934.1777,38749.8516,'SURFACE CAR PARK','COUPON PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3667143987756925,103.84171281191239');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('A10','BLK 201/202 ANG MO KIO STREET 22',29247.03,38962,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3686329816140763,103.84452401517692');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('A100','BLK 650 ANG MO KIO STREET 61',29033.1895,39996.3712,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,0,'N','1.3779874731949413,103.8426025448423');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('A11','BLK 223/226/226A-226D ANG MO KIO ST 22',28541.14,38785.36,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3670355338571103,103.8381810968514');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('A12','BLK 229/230 ANG MO KIO ST 22',28596.14,38948.38,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3685098274818934,103.83867531323688');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('A13','BLK 232/233 ANG MO KIO ST 22',28388.51,38892.03,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3680002216512868,103.83680961188591');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('A15','BLK 226E-226H ANG MO KIO ST 22',28790.02,38777.85,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3669676105068438,103.84041745597003');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('A2','BLK 206/207 ANG MO KIO STREET 22',29082.59,38697.07,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3662370557741195,103.84304639719981');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('A20','BLK 304/307/319 ANG MO KIO ST 31',29684.7366,38554.0251,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3649433806415399,103.8484570918218');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('A21','BLK 325/326/301 ANG MO KIO STREET 31',29446.1477,38906.1139,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3681275586189134,103.84631322417121');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('A23','BLK 347A ANG MO KIO AVENUE 3',29735.5099,38818.5301,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,1.9,'N','1.367335466453611,103.8489133401171');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('A24','BLK 338/340 ANG MO KIO ST 32',29789.41,38533.02,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.364753411881098,103.84939765277404');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('A25','BLK 330/337 ANG MO KIO AVE 8',30037.566,38313.6296,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.362769307428514,103.85162748927682');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('A26','BLK 113/114/118 ANG MO KIO AVE 4',28236.93,39419.47,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3727702022189956,103.8354475641471');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('A27','BLK 108/109/110 ANG MO KIO ST 11',28556.67,39153.3,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,5.4,'N','1.3703630515467662,103.8383206515408');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('A28','BLK 103/105/107 ANG MO KIO ST 11',28461.3669,39295.5961,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3716499282813732,103.83746428814884');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('A29','BLK 347 ANG MO KIO AVENUE 3',29713.5035,38806.4544,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3672262594201794,103.84871559664532');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('A30','BLK 129/134 ANG MO KIO STREET 12',29012.7631,39222.5981,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3709897466881378,103.84241897219856');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('A30A','BLK 133 ANG MO KIO STREET 12',29050.5605,39137.2773,'SURFACE CAR PARK','COUPON PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,0,'N','1.3702181345377287,103.84275860557499');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('A31','BLK 119/128 ANG MO KIO ST 12',29155.32,39163.04,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3704511192782465,103.84369994453289');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('A31A','BLK 125/126 ANG MO KIO STREET 12',29150.6699,39318.7539,'SURFACE CAR PARK','COUPON PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,0,'N','1.3718593403230488,103.84365816613578');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('A33','BLK 253/254 ANG MO KIO STREET 21',28152.8391,39115.4784,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,4.5,'N','1.3700210113414324,103.8346919457703');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('A34','BLK 422/425 ANG MO KIO ST 42',30042,38931.43,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3683564732190312,103.85166737410165');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('A35','BLK 426/428/435 ANG MO KIO ST 43',30310.66,38963.49,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3686463926053314,103.85408147411354');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('A36','BLK 436/443/445 ANG MO KIO ST 43',30443.9088,38715.8847,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3664071280973487,103.85527878732988');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('A37','BLK 446/449/453 ANG MO KIO ST 43',30474.8188,38904.5192,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3681130684869125,103.85555655070168');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('A38','BLK 407/410/421 ANG MO KIO AVE 10',30367.0774,38445.7028,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3639637058040253,103.85458838271092');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('A39','BLK 401/405 ANG MO KIO AVE 10',30309.63,38134.69,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.361151021658676,103.85407215463438');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('A4','BLK 217/220 ANG MO KIO AVENUE 1',28876.2363,38636.7578,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3656916205871399,103.84119216501797');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('A40','BLK 471/476 ANG MO KIO ST 44',30633.47,38267.95,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,9.99,'N','1.3623561505378559,103.856982085985');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('A41','BLK 466/470 ANG MO KIO ST 44',30627.96,38553.32,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3649369353057963,103.85693260004992');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('A42','BLK 461/465 ANG MO KIO ST 44',30675.9559,38735.0223,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3665801816289616,103.85736389239335');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('A43','BLK 457/458/460 ANG MO KIO ST 44',30887.78,38670.51,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3659967355493277,103.8592672719767');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('A44','BLK 459/456 ANG MO KIO ST 44',30856.9781,38804.1956,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.367205743273231,103.8589905085289');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('A45','BLK 570/578 ANG MO KIO ST 51',30438.53,39214.64,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.370917693067463,103.85523049600995');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('A47','BLK 562/565/560 ANG MO KIO STREET 54',30885.475,39174.8899,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3705581670513343,103.85924660891108');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('A48','BLK 571/73 ANG MO KIO ST 51',30374.18,39154.22,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.370371281457809,103.85465226093015');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('A49','BLK 555/559 ANG MO KIO STREET 54',30724.16,39260.19,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3713296059549267,103.85779708766412');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('A50','BLK 548/552/556 ANG MO KIO STREET 54',30703.29,39392.09,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3725224642422442,103.85760956795316');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('A51','BLK 252/253A ANG MO KIO STREET 21',28117.6053,39054.6321,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,5.4,'N','1.369470739293438,103.83437534502323');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('A52','BLK 701/716 ANG MO KIO AVE 3/6',29513.9566,39155.7785,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3703854326512537,103.84692254711804');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('A52L','BLK 700B/ 700C ANG MO KIO AVE 3/6',29426.2389,39033.615,'SURFACE CAR PARK','ELECTRONIC PARKING','NO','NO','NO',0,4.5,'N','1.3692806339821912,103.84613433583972');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('A53','BLK 712A ANG MO KIO AVE 3/6',29508.9218,39208.8091,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',14,1.8,'N','1.370865022700113,103.84687730858266');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('A54','BLK 727/728 ANG MO KIO AVE 6',29401.8671,39382.3378,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3724343595097739,103.84591535458561');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('A55','BLK 729/730 ANG MO KIO AVE 6/8',29485.5,39515.49,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3736385362921213,103.84666686250286');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('A56','BLK 725/730 ANG MO KIO AVE 8',29538.847,39411.5653,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3726986757337083,103.84714621818347');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('A57','BLK 720/723 ANG MO KIO AVE 8',29518.5871,39336.4776,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3720196104757458,103.84696416467077');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('A58','BLK 721/722 ANG MO KIO AVE 8',29603.16,39372.68,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3723470075573287,103.84772411430896');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('A59','BLK 547/551 ANG MO KIO ST 54',30762.295,39543.9937,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,3.8,'N','1.3738962214127284,103.85813978410131');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('A60','BLK 540/546 ANG MO KIO ST 54',30514.5273,39606.8281,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3744644954379803,103.85591341875072');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('A61','BLK 520/534/529 ANG MO KIO AVE 5/10',30096.82,39574.31,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,9.99,'N','1.3741704461236162,103.85216001547201');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('A63','BLK 501/513/508 ANG MO KIO ST 52/53',29789.5613,39690.0448,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,5.4,'N','1.3752171305295189,103.84939908200668');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('A64','BLK 584/586 ANG MO KIO ST 51',30241.6957,39172.3075,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,5.4,'N','1.3705348687012258,103.85346179745221');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('A65','BLK 558/560 ANG MO KIO STREET 54',30904.46,39226.97,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.371029158960113,103.85941720762483');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('A66','BLK 601/604/603 ANG MO KIO AVE 5',28260.64,40279.16,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,5.4,'N','1.3805449309084086,103.83566062297832');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('A67','BLK 605/612 ANG MO KIO AVE 4/5',28499.27,40184.22,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3796863244461326,103.83780488938889');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('A68','BLK 620/624/626 ANG MO KIO ST 61',28727.3335,40428.7342,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.381897618566015,103.83985421482735');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('A69','BLK 623/625/627 ANG MO KIO ST 61',28960.06,40400.41,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,5.4,'N','1.3816414579421694,103.841945435749');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('A7','BLK 212/213 ANG MO KIO STREET 23',28888.4313,38935.4059,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3683924870216897,103.8413017543888');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('A70','BLK 629/626 ANG MO KIO AVE 4',28755.4887,40287.5326,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,9.99,'N','1.3806206411419468,103.84010720676366');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('A71','BLK 628/632 ANG MO KIO ST 61',28826.1219,40219.911,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,5.4,'N','1.3800090936953118,103.84074189671782');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('A72','BLK 633/640 ANG MO KIO ST 61',29136.44,40303.05,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,5.4,'N','1.3807609626573356,103.84353033817386');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('A73','BLK 641/645 ANG MO KIO ST 61',28835.3369,40091.5441,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.378848189137784,103.84082469669613');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('A74','BLK 646/649 ANG MO KIO ST 61',29166.97,40069.8164,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3786516802837327,103.84380466372671');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('A75','BLK 177/182 ANG MO KIO AVE 4',28597.1669,39798.961,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.376202178062335,103.83868455774709');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('A76','BLK 613A ANG MO KIO AVENUE 4',28613.8871,39995.2242,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',9,2,'N','1.377977111891698,103.83883480497552');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('A77','BLK 150/156 ANG MO KIO AVE 5',28741.1744,39815.655,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,9.99,'N','1.3763531493527348,103.83997857029884');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('A78','BLK 157/163 ANG MO KIO AVE 4',28564.0295,39632.2729,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3746947111453895,103.83838679093355');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('A8','BLK 209/210 ANG MO KIO STREET 22',29111.67,38975.61,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3687560709932327,103.843307711467');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('A81','BLK 170/172 ANG MO KIO ST 13',28351.6931,39594.7701,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,9.99,'N','1.3743555525255577,103.83647879468089');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('A82','BLK 173/176 ANG MO KIO AVE 4',28342.7741,39740.6593,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.375674922394817,103.83639865272272');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('A83','BLK 5022 TO 5095 ANG MO KIO IND PARK 2',31046.8301,39589.4805,'SURFACE CAR PARK','COUPON PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3743075596364922,103.8606965409111');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('A85','BLK 340 ANG MO KIO ST 32',29824.1,38572.16,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,0,'N','1.36510737794777,103.84970936855984');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('A86','BLK 4001-4003/4026-4028/4033-4035 ANG MO KIO IND PARK 1',30582.1,38215.84,'SURFACE CAR PARK','COUPON PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3618848908307486,103.85652048735037');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('A87','BLK 462/463 ANG MO KIO ST 44',30733.8638,38762.2439,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3668263587464071,103.8578842373729');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('A88','BLK 348 ANG MO KIO AVE 3',29552.24,38701.9,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,0,'N','1.3662807156719157,103.84726652678984');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('A89','BLK 101/102 ANG MO KIO ST 11',28673.21,39163.93,'SURFACE CAR PARK','COUPON PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,0,'N','1.3704591830451673,103.8393678459084');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('A9','BLK 202/203 ANG MO KIO STREET 22',29232.3606,38900.2315,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3680743699781341,103.8443921978058');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('A90','BLK 625/627 ANG MO KIO ST 61',28882.3578,40440.1317,'SURFACE CAR PARK','COUPON PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,5.4,'N','1.3820006892151129,103.84124722457139');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('A94','BLK 104C ANG MO KIO STREET 11',28556.1477,39318.8058,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2,'N','1.3718598268833135,103.8383159614014');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('A95','BLK 323A ANG MO KIO AVENUE 3',29612.0323,38838.7824,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3675186280077751,103.84780380928078');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('A98','BLK 259 ANG MO KIO AVE 2',27837.0334,39020.7488,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.369164310596369,103.83185420964786');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('A99','BLK 181 ANG MO KIO AVE 5',28433.4999,39885.5496,'SURFACE CAR PARK','COUPON PARKING','7AM-10.30PM','NO','NO',0,0,'N','1.3769852572551429,103.83721389196872');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BA1','106 BIDADARI PARK DRIVE',32171.1116,35094.0857,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',8,2.15,'N','1.3336526799354937,103.87079839427501');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BA2','BLK 117 ALKAFF CRESCENT',32444.5217,35453.6678,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',8,2.15,'N','1.3369045733012812,103.87325519193998');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BA3','BLK 101 BIDADARI PARK DRIVE',32225.0311,35371.0933,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',2,2.2,'N','1.3361578304439936,103.87128293005257');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BA4','BLK 113 ALKAFF CRESCENT',32410.3926,35271.7364,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',8,2.15,'N','1.3352592556272456,103.87294849581734');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BBB','BLK 232 BRAS BASAH BASEMENT CAR PARK',30264.1776,30994.7597,'BASEMENT CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',1,1.9,'Y','1.2965800277256125,103.85366320640063');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BBM1','BLK 188A BUKIT BATOK WEST AVE 6',18213.6562,36507.8169,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2,'N','1.3464366536863828,103.74538227425053');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BBM2','BLK 628A BUKIT BATOK CENTRAL',18714.471,36997.6927,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',11,2.15,'N','1.3508670707092765,103.74988224837884');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BBM3','BLK 289H BUKIT BATOK STREET 25',19831.2917,36294.3127,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.344506283225649,103.75991777083962');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BBM4','BLK 288H BUKIT BATOK STREET 25',19860.3631,36409.798,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',13,2.15,'N','1.3455506982843084,103.76017896379179');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BBM5','BLK 290H BUKIT BATOK STREET 24',19610.472,36154.6192,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',4,2,'N','1.3432428850770275,103.75793361152421');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BBM6','BLK 291F BUKIT BATOK STREET 24',19289.8168,36112.2533,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',4,2,'N','1.3428596521147578,103.75505234518015');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BBM7','BLK 154A BUKIT BATOK WEST AVE 8',18025.9428,36609.4062,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',8,2,'N','1.3473553282589252,103.74369552196029');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BBM8','BLK 622A BUKIT BATOK CENTRAL',18561.8095,36898.4253,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',6,2.15,'N','1.3499692848447977,103.74851052070392');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BBM9','BLK 395A BUKIT BATOK WEST AVE 5',18924.8161,38652.2819,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',16,2.15,'N','1.3658306352822907,103.75177182867174');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BE10','BLKS 168-180 BISHAN STREET 13',30223.1994,36651.8815,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3477410368330691,103.8532954079855');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BE11','BLK 181-186 BISHAN STREET 13',30194.9243,36877.2792,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3497794554538223,103.85304135503804');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BE12','BLK 187-197 BISHAN STREET 13',29963.6285,36903.1662,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,4.5,'N','1.3500135843193575,103.850963018476');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BE13','BLK 135A BISHAN STREET 12',30026.4687,36336.1338,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',5,1.9,'N','1.344885540917709,103.85152763920905');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BE14','BLK 167A BISHAN STREET 13',30460.9446,36576.481,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',5,1.9,'N','1.3470591230008566,103.85543169019655');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BE15','BLK 152A BISHAN STREET 11',30394.9029,36366.7901,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',6,1.9,'N','1.3451627584912207,103.85483824803856');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BE16','BISHAN PARK I',28193.9043,38482.8203,'SURFACE CAR PARK','COUPON PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.364299477060462,103.83506094142611');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BE17','BISHAN PARK II',29598.0859,38339.9922,'SURFACE CAR PARK','COUPON PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3630077482977747,103.84767846445125');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BE18','BLK 441-455 SIN MING/BRIGHT HILL DRIVE',27751.5586,37825.0781,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,4.5,'N','1.3583510906519627,103.83108616866879');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BE19','BLK 503/504 BISHAN STREET 11',29656.3321,36775.0947,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3488553698228003,103.84820175969973');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BE20','BLK 505 BISHAN STREET 11',29707.8648,36779.0905,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',9,1.9,'N','1.348891503524757,103.84866481348335');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BE21','BLK 506/509 BISHAN STREET 11',29749.6768,36749.5862,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3486246747246498,103.84904051876238');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BE22','BLK 511/513 BISHAN STREET 13',29818.0559,36839.3645,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3494365936467376,103.84965495311563');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BE23','BLK 514 BISHAN STREET 13',29830.0702,36912.2681,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',2,1.8,'N','1.350095907120638,103.8497629135692');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BE24','BLK 201/206 BISHAN STREET 23',29576.3203,37491.2812,'SURFACE CAR PARK','COUPON PARKING','7AM-7PM','SUN & PH FR 7AM-10.30PM','NO',0,4.5,'N','1.3553323098292807,103.84748284110583');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BE25','BLK 207A BISHAN STREET 23',29668.2541,37471.6058,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',5,1.9,'N','1.3551543675245747,103.8483089249273');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BE26','BLK 207/212/216/217 BISHAN STREET 23',29684.6992,37553.5273,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-7PM','SUN & PH FR 7AM-10.30PM','NO',0,0,'N','1.3558952354526168,103.84845669941903');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BE27','BLK 212A BISHAN STREET 23',29704.1126,37637.6725,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',5,1.9,'N','1.3566562135466171,103.84863114624726');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BE28','BLK 213-215,218-227 BISHAN STREET 23',29639.4805,37778.0547,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-7PM','SUN & PH FR 7AM-10.30PM','NO',0,4.5,'N','1.3579257837444072,103.8480503922034');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BE29','BLK 228-231 BISHAN STREET 23',29400.2617,37725.7422,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-7PM','SUN & PH FR 7AM-10.30PM','NO',0,4.5,'N','1.3574527003474073,103.84590085114554');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BE3','BLK 401-408 SIN MING AVE',28121.0801,38268.7852,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,4.5,'N','1.362363820332417,103.83440656538855');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BE3R','BLK 410A SIN MING AVE',28240.0745,38359.6695,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',9,2.1,'N','1.3631857448141895,103.8354758112253');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BE30','BLK 231A BISHAN STREET 23',29460.8559,37726.9889,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',5,1.9,'N','1.3574639721486652,103.84644532993391');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BE31','BLK 232-237 BISHAN STREET 22',29421.8945,37882.1133,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-7PM','SUN & PH FR 7AM-10.30PM','NO',0,0,'N','1.3588668638092514,103.84609524349523');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BE32','BLK 237A BISHAN STREET 22',29486.1335,37915.7452,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',5,1.9,'N','1.3591710155830472,103.84667247515101');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BE33','BLK 238-245 BISHAN STREET 22',29279.9809,38026.2842,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-7PM','SUN & PH FR 7AM-10.30PM','NO',0,4.5,'N','1.360170700467688,103.84482006190848');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BE34','BLK 246A BISHAN STREET 22',29146.6066,38113.6749,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',5,1.85,'N','1.3609610362378004,103.84362160812951');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BE35','BLK 246-256 BISHAN STREET 22',29086.8281,38164.5,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-7PM','SUN & PH FR 7AM-10.30PM','NO',0,4.5,'N','1.3614206825630537,103.84308446006855');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BE36','BLK 278-281 BISHAN STREET 24',29248.3008,37730.4375,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,4.5,'N','1.3574951697204785,103.84453538273536');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BE37','BLK 282 BISHAN STREET 22',29235.553,37787.1371,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',2,1.95,'N','1.3580079412271227,103.84442083770412');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BE38','BLK 283/284 BISHAN STREET 22',29251.7617,37885.625,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,4.5,'N','1.3588986300125814,103.84456648767828');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BE39','BLK 263A BISHAN STREET 22',28962.9515,37918.5499,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',10,1.9,'N','1.3591964018143061,103.84197133762822');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BE4','BLK 101-116 BISHAN STREET 12',29675.9231,36514.1566,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.346495537393408,103.84837778261465');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BE40','BLK 268A BISHAN STREET 24',29037.3835,37710.0917,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,1.9,'N','1.357311177642305,103.84264015136309');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BE42','BLK 290A BISHAN STREET 24',29249.7223,37516.6532,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.355561780622899,103.84454814694634');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BE44','BLK 448A BRIGHT HILL DRIVE',27812.0967,37767.5494,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2.15,'N','1.3578308220309527,103.83163014387951');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BE45','BLK 275 BISHAN ST 24',29152.4171,37599.2039,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','NO','NO',6,2.15,'N','1.3563083436627195,103.8436737995863');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BE5','BLK 117-134 BISHAN STREET 12',29963.414,36478.9779,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.346177376327491,103.85096106346917');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BE6','BLK 135/138 BISHAN STREET 12',30066.0547,36320.9492,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.344748214102587,103.85188334257273');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BE7','BLK 139-144 BISHAN STREET 12',30192.8737,36349.311,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-7PM','SUN & PH FR 7AM-10.30PM','NO',0,4.5,'N','1.3450046991490174,103.85302289077185');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BE8','BLK 145-150A, 151 BISHAN STREET 11',30447.9395,36286.4727,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3444363922390985,103.85531480784525');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BE9','BLK 153-167 BISHAN STREET 13',30544.5318,36588.7709,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3471702615089838,103.85618277394852');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BH1','BLK 1 THOMSON ROAD',29017.3398,34136.332,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3249913646328675,103.8424599258254');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BH2','BLK 2 BALESTIER ROAD',29050.8796,34252.9453,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3260459729073188,103.842761303002');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BJAL','BLK 517 - 519 JELAPANG ROAD',20505.161,41097.6794,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3879463629794158,103.76597168318837');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BJBL','BLK 533 - 534 BUKIT PANJANG RING ROAD',20272.3997,40658.5045,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.383974564627421,103.76388026052386');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BJMP','BLK 259B BANGKIT ROAD',21344.6326,39972.0102,'MECHANISED CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',15,2.15,'N','1.3777664235348215,103.77351523338471');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BJ1','BLK 130-140 CASHEW ROAD',20878.08,39550.76,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,0,'N','1.3739566801241152,103.76932302016631');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BJ10','BLK 234-241 BUKIT PANJANG RING ROAD',21026.3461,40101.7077,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,4.5,'N','1.378939286630854,103.77065516676899');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BJ11','BLK 242-245 BUKIT PANJANG RING ROAD',21162.6537,40303.4372,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,0,'N','1.380763687110141,103.77187994356355');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BJ12','BLK 246-255 BANGKIT ROAD',21452.9618,40246.9897,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,0,'N','1.3802532628105784,103.77448858908443');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BJ13','BLK 270-277 BANGKIT ROAD',21485.25,39887.66,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3770036224850932,103.77477880177571');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BJ14','BLK 257 BANGKIT ROAD',21346.1751,40106.9685,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,0,'N','1.378986937795816,103.77352906342219');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BJ15','BLK 259A BANGKIT ROAD',21374.3071,39941.9395,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','NO','NO',1,3,'N','1.3774944817504973,103.77378188713317');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BJ16','BLK 259A BANGKIT ROAD',21356.3257,39943.2707,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,1.9,'N','1.3775065165718783,103.77362031087559');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BJ17','BLK 401A FAJAR ROAD',20836.1138,40357.2456,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',5,1.9,'N','1.3812502325627354,103.76894572813386');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BJ18','BLK 401-408 FAJAR ROAD',20743.2768,40326.2581,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,5.4,'N','1.3809699699980742,103.76811152657737');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BJ19','BLK 409-419 FAJAR ROAD',20773.5976,40665.0357,'SURFACE CAR PARK','ELECTRONIC PARKING','NO','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.384033758824113,103.76838389812893');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BJ2','BLK 141-151 GANGSA/PETIR ROAD',20581.8743,39791.6392,'SURFACE CAR PARK','ELECTRONIC PARKING','NO','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3761350307538076,103.7666613402764');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BJ20','BLK 420-426 FAJAR ROAD',20929.1589,40888.8561,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,4.5,'N','1.3860579471811598,103.769781679334');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BJ21','BLK 427-435 BUKIT PANJANG RING ROAD',21028.24,40876.34,'SURFACE CAR PARK','ELECTRONIC PARKING','NO','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3859447799988975,103.77067200118992');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BJ22','BLK 256/257/260 BANGKIT ROAD',21343.2842,40030.3147,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','NO','NO',0,0,'N','1.3782937079787774,103.77350310387189');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BJ23','BLK 258 BUKIT PANJANG RING ROAD',21281.85,39957.43,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','NO','NO',0,0,'N','1.3776345511753252,103.77295108931894');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BJ24','BLK 436-441 FAJAR ROAD',21005.5592,40580.2986,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3832674838228838,103.77046826752373');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BJ25','BLK 453A FAJAR ROAD',21145.4428,40760.7142,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2.15,'N','1.384899130104685,103.77172518427943');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BJ26','BLK 449A BUKIT PANJANG RING ROAD',21253.8552,40640.1785,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2.15,'N','1.3838090743064257,103.77269937922769');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BJ27','BLK 442A FAJAR ROAD',21059.217,40510.9727,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2.15,'N','1.3826405383885618,103.77095043939036');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BJ28','BLK 170A LOMPANG ROAD',20457.7599,40100.1252,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',12,2.15,'N','1.378924834192692,103.76554600407277');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BJ29','BLK 505A JELAPANG ROAD',20695.6095,40765.0345,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3849380921344518,103.76768309161008');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BJ3','BLK 101/129 GANGSA ROAD/PENDING ROAD',20884.1354,39921.5746,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,5.4,'N','1.3773101941380117,103.76937734296435');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BJ30','BLK 510A JELAPANG ROAD',20839.8705,40996.2639,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3870292824106258,103.76897932907721');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BJ31','BLK 513A JELAPANG ROAD',20672.7922,41096.8488,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',2,2.15,'N','1.3879388940244672,103.76747797804047');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BJ32','BLK 518A JELAPANG ROAD',20612.4337,40944.82,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3865639857228234,103.76693564904001');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BJ33','BLK 234A BUKIT PANJANG RING ROAD',21177.2481,40121.6311,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3791195021651246,103.7720111271445');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BJ34','BLK 517A JELAPANG ROAD',20565.9376,41081.058,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',2,2.15,'N','1.3877960606883626,103.76651781167364');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BJ35','BLK 521A JELAPANG ROAD',20498.7021,40997.6232,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',2,2.15,'N','1.3870414895407535,103.76591367064594');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BJ36','BLK 525A JELAPANG ROAD',20434.7146,40912.3617,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',2,2.15,'N','1.386270399087044,103.76533871621312');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BJ37','BLK 529A JELAPANG ROAD',20361.9478,40819.6691,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3854321020503486,103.7646848754351');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BJ38','BLK 533A BUKIT PANJANG RING ROAD',20221.922,40787.0081,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',7,2.15,'N','1.3851366908698401,103.76342664649454');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BJ39','BLK 537A BUKIT PANJANG RING ROAD',20158.8662,40686.9514,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',7,2.15,'N','1.3842317977235148,103.76286006929963');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BJ4','BLK 219/233 PETIR ROAD',21204.7046,39724.8735,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3755313767853974,103.77225793527481');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BJ40','BLK 541A BUKIT PANJANG RING ROAD',20163.4889,40531.4817,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',11,2.15,'N','1.3828257877526797,103.76290164919327');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BJ41','BLK 152A GANGSA ROAD',20447.5641,39722.7569,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3755120500520865,103.7654544839076');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BJ42','BLK 163A GANGSA ROAD',20317.5802,39878.586,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3769212779575655,103.76428644466158');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BJ43','BLK 603A SENJA ROAD',20027.2654,40409.2626,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.381720445982174,103.76167761264911');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BJ44','BLK 177A LOMPANG ROAD',20395.5322,40290.7701,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',9,2.15,'N','1.3806489411159282,103.76498679347908');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BJ45','BLK 180A LOMPANG ROAD',20397.9729,40073.9347,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',8,2.15,'N','1.3786879613964398,103.76500878091232');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BJ48','BLK 651A SENJA LINK',20352.8446,41013.5834,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',6,2.15,'N','1.3871857898272917,103.76460302573584');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BJ49','BLK 611A/613A/615A/616A BUKIT PANJANG RING ROAD/SENJA ROAD',20006.0358,40760.5616,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',6,2.15,'N','1.3848974600068813,103.76148675340319');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BJ5','BLK 225A PETIR ROAD MSCP',21295.8798,39665.1802,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',5,1.9,'N','1.3749915531813584,103.7730772236168');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BJ50','BLK 468A SEGAR ROAD',21363.991,41123.9328,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2.15,'N','1.388183997698606,103.77368892264865');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BJ51','BLK 181A JELEBU ROAD',20226.0907,40152.4974,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',12,2.15,'N','1.379398408707913,103.76346427312762');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BJ52','BLK 185A JELEBU ROAD',20134.1254,40120.981,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',12,2.15,'N','1.379113361323433,103.76263790594537');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BJ53','BLK 480A SEGAR ROAD',21168.4806,41302.9377,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',5,2.15,'N','1.389802807641881,103.77193206988463');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BJ54','BLK 476A SEGAR ROAD',21342.9805,41219.4493,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',7,2.15,'N','1.3890478094024705,103.77350010545928');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BJ55','BLK 625A SENJA ROAD',19927.0486,40913.764,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',13,2.15,'N','1.3862829447414375,103.76077695178896');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BJ56','BLK 629A SENJA ROAD',19723.7125,40870.4549,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',14,2.15,'N','1.385891216047011,103.75894983505444');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BJ57','BLK 628 SENJA RD',19859.549,40799.6812,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,0,'N','1.385251202845707,103.76017044837732');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BJ58','BLK 455A SEGAR ROAD',21095.0855,41051.008,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',8,2.15,'N','1.3875244297684308,103.77127261757724');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BJ59','BLK 488A SEGAR ROAD',21094.1509,41309.8258,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2.15,'N','1.3898650835437794,103.77126415842334');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BJ6','BLK 217A PETIR ROAD MSCP',21443.7871,39574.4888,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',5,1.9,'N','1.3741714064009953,103.77440629700969');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BJ60','BLK 547 SEGAR ROAD',20897.8022,41135.8221,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',9,2.15,'N','1.3882914101394497,103.76949985573688');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BJ61','BLK 548 SEGAR ROAD',20712.1138,41213.883,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',8,2.15,'N','1.3889973185441589,103.76783128358848');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BJ62','BLK 454 FAJAR ROAD',21108.8428,40690.9971,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,0,'N','1.384268625374574,103.77139632201686');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BJ63','BLK 443 FAJAR ROAD',20985.8418,40364.4597,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3813155105578694,103.77029114340563');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BJ65','BLK 632 SENJA ROAD',19702.7354,40739.1965,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','NO','SUN & PH FR 7AM-10.30PM','YES',9,2.15,'N','1.3847041571560248,103.75876137706072');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BJ66','BLK 634 SENJA ROAD',19584.9139,40909.9744,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2.15,'N','1.3862485761850678,103.75770261335553');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BJ67','BLK 636 SENJA ROAD',19616.1105,41031.7585,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2.15,'N','1.3873499559694598,103.75798290360146');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BJ68','BLK 422A FAJAR ROAD',20950.1385,40814.0823,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3853817252275453,103.76997021493034');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BJ8','BLK 201/218 PETIR ROAD',21353.5943,39632.9105,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3746997308259696,103.77359583708795');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BKE1','BLK 668 CHANDER ROAD',30034.1445,32237.498,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,0,'N','1.3078189305831844,103.8515963392349');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BKE2','BLK 681/682 RACE COURSE ROAD',30466.3496,32935.1367,'SURFACE CAR PARK','COUPON PARKING','7AM-7PM','NO','NO',0,2.3,'N','1.314128096949686,103.85547996378351');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BKE3','BLK 682/683 RACE COURSE ROAD',30502.0605,32966.8867,'SURFACE CAR PARK','COUPON PARKING','7AM-7PM','NO','NO',0,2.3,'N','1.3144152298359435,103.85580084662944');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BKE4','BLK 684/685 RACE COURSE ROAD',30617.8164,32970.7734,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-7PM','NO','NO',0,0,'N','1.3144503701412007,103.85684097167268');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BKE7','BLK 678 PERUMAL ROAD',30448.766,32767.6002,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',11,1.9,'N','1.3126129574907244,103.85532195310934');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BKE9','BLK 668 CHANDER ROAD',30019.3942,32184.232,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,0,'N','1.307337212647671,103.85146379729147');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BKRM','BLK 6A BOON KENG ROAD',31121.6383,33283.2558,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2,'N','1.3172763032697552,103.86136809519948');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BLM','BLK 10 BENDEMEER ROAD',31076.0824,33087.5529,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',7,2.15,'N','1.3155064401637513,103.86095873270126');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BL10','BLK 188/191 BOON LAY DRIVE',14434.5806,36212.2117,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,9.99,'N','1.3437618406573535,103.7114251379436');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BL13','BLK 198/206 BOON LAY DRIVE',14836.3467,36315.1094,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3446925875203717,103.71503519763307');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BL15','BLK 257A BOON LAY DRIVE',14004.6897,36456.5691,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,1.9,'N','1.3459715197541577,103.70756220303554');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BL17','BLK 268 BOON LAY DRIVE',14024.5648,36666.6301,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2.15,'N','1.3478712414477692,103.70774069535459');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BL18','BLK 208A BOON LAY PLACE',14768.3178,36520.4472,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2.15,'N','1.346549555712571,103.71442382780704');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BL19','BLK 212A BOON LAY PLACE',14648.3419,36766.7841,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2.15,'N','1.3487772809984708,103.7133456635813');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BL20','180 BOON LAY DRIVE',14072.9303,36691.7296,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',5,2.15,'N','1.3480982543721107,103.70817527684159');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BL21','183 BOON LAY AVENUE',14206.3144,36819.8339,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2.15,'N','1.3492568430818872,103.70937375465324');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BL22','196 BOON LAY DR',14693.2928,36077.4814,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3425435059718895,103.71374987824393');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BL23','216 BOON LAY AVE',14451.8262,36853.4082,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',16,2.15,'N','1.3495605885266677,103.71157981204752');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BL3','BLK 174/179 BOON LAY DRIVE',14190.8096,36556.4297,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,9.99,'N','1.346874707613086,103.70923455522826');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BL8','BLK 221 BOON LAY PLACE',14653.3598,36396.1197,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3454251335374876,103.71339091636773');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BL8L','BLK 221 BL8 BOON LAY PLACE',14505.671,36484.5266,'SURFACE CAR PARK','ELECTRONIC PARKING','NO','NO','NO',0,4.5,'N','1.346224586311341,103.71206380535884');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BL9','BLK 185/187 BOON LAY AVE',14356.1152,36445.4219,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.15,'N','1.3458708704867612,103.71071997503024');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BMVM','BLK 126A BUKIT MERAH VIEW',26866.0055,29672.9702,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',11,1.9,'N','1.2846262894692295,103.82312918959775');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BM1','BLK 28 JALAN BUKIT MERAH',25357.1463,29858.3486,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,0,'N','1.2863026958403272,103.80957147714548');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BM10','BLK 56/57 LENGKOK BAHRU',25857.7754,30056.6386,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.288095999047964,103.81406981706992');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BM12','BLK 55 LENGKOK BAHRU',25769.3044,30009.7592,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.287672032068253,103.81327487237847');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BM13','BLK 44/47 LENGKOK BAHRU',25648.7676,29924.1943,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,0,'N','1.286898204396789,103.81219180664439');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BM14','BLK 34-36 JALAN RUMAH TINGGI',25276.6255,30161.1078,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','NO','NO',0,5.4,'N','1.2890407366150325,103.80884793932954');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BM19','BLK 88/89 REDHILL CLOSE',26373.3689,29793.0744,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.2857124480254312,103.81870264853339');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BM2','BLK 28 HOY FATT ROAD',25399.6152,29918.9512,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,2.1,'N','1.2868507679834955,103.80995307226148');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BM20','BLK 89/90 REDHILL CLOSE',26379.7745,29741.6402,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.285247295517056,103.81876020804624');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BM21','BLK 17 REDHILL CLOSE',26296.1582,29735.998,'SURFACE CAR PARK','COUPON PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.2851962650167004,103.81800888261792');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BM25','BLK 13 REDHILL CLOSE',26157.2988,29795.3418,'SURFACE CAR PARK','COUPON PARKING','WHOLE DAY','NO','YES',0,0,'N','1.2857329416555094,103.81676117221748');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BM26','BLK 1/3/5 JALAN BUKIT MERAH',25118.4593,29967.6925,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,4.5,'N','1.287291542584282,103.80742676873206');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BM27','BLK 115/116 BUKIT MERAH CENTRAL',25937.1387,29610.3105,'SURFACE CAR PARK','COUPON PARKING','NO','NO','NO',0,4.5,'N','1.284059569899438,103.8147829578239');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BM28','BLK 117, 161 BUKIT MERAH CENTRAL',26052.9053,29603.6488,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','NO','NO',0,9.99,'N','1.2839993312076001,103.81582316671016');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BM29','BLK 163 BUKIT MERAH CENTRAL',26194.9184,29563.3295,'BASEMENT CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',1,2,'Y','1.2836347060925115,103.8170992125997');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BM3','BLK 49/50 HOY FATT ROAD',25574.8666,30013.7121,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,4.5,'N','1.2877077662690217,103.81152776946917');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BM30','BLK 164/165 BUKIT MERAH CENTRAL',26154.2109,29519.0586,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','NO','NO',0,9.99,'N','1.2832343332565168,103.81673344232499');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BM31','BLK 119 BUKIT MERAH CENTRAL',26136.5799,29432.235,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,1.9,'N','1.2824491300655365,103.81657502600716');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BM33','BLKS 167-169 JALAN BUKIT MERAH',26367.6248,29465.267,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',14,1.9,'N','1.282747872709334,103.81865105241602');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BM34','BLK 8/9 REDHILL CLOSE',26144.1953,29717.0977,'SURFACE CAR PARK','COUPON PARKING','WHOLE DAY','NO','YES',0,0,'N','1.2850253287314666,103.81664343662788');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BM35','BLK 1/5/7 REDHILL CLOSE',26292.5455,29646.5632,'SURFACE CAR PARK','COUPON PARKING','WHOLE DAY','NO','YES',0,0,'N','1.2843874478998882,103.81797642590082');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BM36','JALAN BUKIT MERAH',26279.3643,29471.6752,'SURFACE CAR PARK','COUPON PARKING','NO','NO','NO',0,4.5,'N','1.282805821517793,103.81785799712083');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BM4','BLK 35A JALAN RUMAH TINGGI',25288.5551,30009.2384,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,2.15,'N','1.287667284248731,103.80895514474003');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BM5','BLKS 8/10 JALAN RUMAH TINGGI',25139.9101,30093.7491,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-7PM','NO','NO',0,4.5,'N','1.288431556063423,103.80761950142214');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BM6','BLK 61 LENGKOK BAHRU',25823.7973,30215.5782,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.2895333905500654,103.81376449901667');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BM9','BLK 58/59 LENGKOK BAHRU',25889.8506,30167.4343,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.28909799857285,103.81435801840581');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BP1','BLK 101/109 BUKIT PURMEI ROAD',27059.7441,28364.7207,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.2727949460019108,103.82487004638605');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BP2','BLK 110/115 BUKIT PURMEI ROAD',27297.2734,28508.1074,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,1.9,'N','1.2740916912710758,103.82700432828176');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BRBL','BLK 665 BUFFALO ROAD LOADING/UNLOADING BAYS',29935.2249,32102.3708,'SURFACE CAR PARK','ELECTRONIC PARKING','NO','NO','NO',0,0,'N','1.3065968942240478,103.85070749100312');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BRB1','BLK 665 BUFFALO ROAD BASEMENT CAR PARK',29921.7021,32043.75,'BASEMENT CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',1,1.8,'Y','1.306066749235348,103.85058597863153');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BRM','BLK 39 BENDEMEER ROAD',31656.358,33667.0566,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',4,2.15,'N','1.3207472024589295,103.86617287009032');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BRM1','BLK 112A WHAMPOA ROAD',30605.3384,34301.5549,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',11,2,'N','1.3264854877042713,103.85672896311394');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BRM2','BLK 32A JALAN BAHAGIA',30711.6128,34245.0049,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2,'N','1.3259740602921022,103.85768389140578');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BRM3','BLK 98A WHAMPOA DRIVE',30374.6768,33753.3566,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',7,2,'N','1.3215277953752567,103.85465630079332');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BRM4','BLK 85A WHAMPOA DRIVE',30532.4552,33886.3275,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',2,2.1,'N','1.322730324429887,103.85607403368216');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BRM5','BLK 19A JALAN TENTERAM',30912.1514,34418.5838,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',13,2,'N','1.3275438277706244,103.85948585590164');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BRM6','BLK 116 JALAN TENTERAM',31102.1822,34445.0449,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',6,2.15,'N','1.3277831137966807,103.86119338936635');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BRM7','BLK 78A LORONG LIMAU',30457.6666,34068.0647,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',12,2.15,'N','1.3243738973722423,103.85540203296432');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BR10','BLK 90 WHAMPOA DRIVE',30357.7598,33918.1953,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3230185394991696,103.85450430527517');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BR11','BLKS 27-30 & 32-33 JALAN BAHAGIA',30854.1176,34276.8274,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3262618386843075,103.85896437723358');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BR12','BLKS 34/35 JALAN BAHAGIA',30715.4375,34382.2305,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3272150796002606,103.8577182705579');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BR14','BLK 20 JALAN TENTERAM',30967.5336,34242.9719,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,5.4,'N','1.325955650724788,103.85998347830035');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BR18','BLK 111A ST MICHAEL BUS TERMINAL',30496.3613,34277.707,'SURFACE CAR PARK','COUPON PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3262698248738671,103.8557497426468');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BR21','BLK 41/47 JALAN BAHAGIA',30595.5166,34387.1259,'SURFACE CAR PARK','COUPON PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,0,'N','1.3272593623162008,103.85664071614106');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BR22','BLK 61/62 JALAN MA''MOR',30701.4824,34507.3281,'SURFACE CAR PARK','COUPON PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,0,'N','1.328346419150047,103.85759288738599');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BR4','BLK 81/89 WHAMPOA DRIVE',30459.8203,33979.9766,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3235772596397815,103.85542137806372');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BR5','BLK 74/75 WHAMPOA DRIVE',30768.0099,34127.2333,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,2.9,'N','1.3249089706442563,103.85819063929895');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BR6','BLK 92 WHAMPOA DRIVE',30249.9707,33920.4375,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3230388252880416,103.85353576307081');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BR8','BLK 76/77 LORONG LIMAU',30363.7715,34154.9883,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,3,'N','1.32516001102033,103.85455834180907');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BR9','BLK 69 MOULMEIN ROAD',29939.1769,33469.7037,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3189625696233318,103.85074308712241');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BTM','BLK 2B BOON TIONG ROAD',27996.7913,29911.548,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.2867839238665024,103.8332897478358');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BTM2','BLK 8C BOON TIONG RD',27590.7177,29931.3587,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.28696308219404,103.82964101237162');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BTM3','BLK 11A BOON TIONG ROAD',27485.7966,29859.2793,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',10,2.15,'N','1.2863112198549262,103.82869825504955');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BVM2','BLK 129A BUKIT MERAH VIEW',26893.4354,29547.635,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2.15,'N','1.2834928028879091,103.8233756624967');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('BWM','BLK 2A JLN BUKIT MERAH',25037.7298,29927.4975,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',7,2.15,'N','1.2869280256342526,103.80670138529204');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B10','BLK 404/413 BEDOK NORTH AVENUE 3',39172.2903,34582.9441,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3290283308949415,103.93370774409028');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B10M','BLK 431 BEDOK NORTH ROAD',39040.5507,34603.0432,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',8,2.15,'N','1.329210147888524,103.93252399987328');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B11','BLK 416/418 BEDOK NORTH AVENUE 2',38803.7496,34507.0389,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3283420053245567,103.93039617992305');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B12','BLK 420/421 BEDOK NORTH STREET 1',38523.5625,34424.8004,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3275983686830153,103.92787851961288');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B13','BLK 414/425 BEDOK NORTH ROAD',38733.3633,34652.0234,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3296532168537056,103.9297637719663');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B14','BLK 412/413 BEDOK NORTH AVENUE 2',38920.4797,34597.393,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3291590929262382,103.93144509494549');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B16','BLK 32/63 BEDOK SOUTH AVENUE 2',39934.8473,33971.8042,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3235011178756233,103.94055949192449');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B17','BLK 52/57 NEW UPPER CHANGI ROAD',40079.2617,34051.0508,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.32421773800636,103.94185716126597');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B19','BLK 37/38/43/60 BEDOK SOUTH ROAD',39979.5352,33797.4766,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3219245460051459,103.94096096793446');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B20','BLK 67/73 BEDOK SOUTH ROAD',40253.2539,33562.5352,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3197997144802653,103.94342037708859');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B21','BLK 74/82 BEDOK NORTH ROAD',39989.0226,34488.949,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,5.4,'N','1.3281779629096109,103.94104648719095');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B23M','BLK 187 BEDOK NORTH ST 4',39944.1477,34766.4678,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',8,2.15,'N','1.3306877578836154,103.9406433705684');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B24','BLK 84/89 BEDOK NORTH AVENUE 4',39682.7466,34983.1176,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,4.5,'N','1.3326471603070096,103.9382946222624');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B24A','BLK 84 BEDOK NORTH STREET 4',39829.8122,34830.0817,'SURFACE CAR PARK','COUPON PARKING','WHOLE DAY','NO','YES',0,0,'N','1.3312631032232756,103.93961602851004');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B25','BLK 91/97 BEDOK NORTH AVENUE 4',39927.1063,35018.7287,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-7PM','NO','NO',0,4.5,'N','1.332969118771698,103.94049034285037');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B26','BLK 98/100 BEDOK NORTH AVENUE 4',39910.4336,35166.7734,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3343079867729029,103.94034058725505');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B27','BLK 101/106 BEDOK NORTH AVENUE 4',39654.1953,35145.7266,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.334117746989273,103.93803813520938');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B28','BLK 107/110 BEDOK NORTH ROAD',39379.6445,34971.7852,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3325447895324363,103.93557107829302');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B30','BLK 119/123 BEDOK NORTH STREET 2',39733.8204,34684.0888,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3299428346569537,103.93875343367463');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B31','BLK 124/129 BEDOK NORTH STREET 2',39744.5963,34524.6842,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3285012341967177,103.93885019978532');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B32','BLK 130/132 BEDOK NORTH STREET 2',39511.7026,34404.0851,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3274106694551349,103.93675747950438');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B33','BLK 131/133 BEDOK NORTH AVENUE 3',39405.1638,34385.3038,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3272408584024238,103.93580016456161');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B34','BLK 134/136 BEDOK NORTH AVENUE 3',39391.0547,34503.7773,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3283122943595482,103.93567343083882');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B35','BLK 137/140 BEDOK NORTH AVENUE 3',39335.7148,34586.2422,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3290580972039858,103.93517620266337');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B40','BLK 504/507 BEDOK NORTH STREET 3',39067.9293,34972.3428,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.332549947638766,103.9327701451649');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B41','BLK 510 BEDOK NORTH STREET 3',38925.7812,34972.8867,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-7PM','NO','NO',0,0,'N','1.3325549180208134,103.93149286604553');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B42','BLK 509/511 BEDOK NORTH STREET 3',38851.0273,34961.4805,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,0,'N','1.3324517913824236,103.93082115682421');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B43','BLK 519/522 553 BEDOK NORTH AVENUE 1/2',38492.9294,34812.5657,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3311051865435088,103.92760339777342');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B44','BLK 528/536 BEDOK NORTH STREET 3',38482.3867,35129.4805,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3339712514435131,103.92750877467209');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B44A','BLK 523/527 BEDOK NORTH STREET 3',38743.3984,35178.6016,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3344153931770506,103.92985412808544');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B44B','BLKS 556/557 BEDOK NORTH STREET 3',37970.7092,34944.8181,'SURFACE CAR PARK','ELECTRONIC PARKING','NO','NO','YES',0,0,'N','1.3323014049396784,103.92291100535617');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B45','BLK 537/539 BEDOK NORTH STREET 3',38250.9386,34876.1148,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,4.5,'N','1.3316799840248994,103.92542899880056');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B46','BLK 537/538 BEDOK NORTH STREET 3',38112.1565,34836.4398,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','NO','NO',0,0,'N','1.3313212244017443,103.92418195189414');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B47','BLK 540/542 BEDOK NORTH STREET 3',37896.9112,34789.4034,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3308959153267617,103.92224783902378');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B48','BLK 543/547 BEDOK NORTH STREET 3',38027.5007,34700.9495,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3300959277312137,103.92342122843809');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B48B','BLK 547C BEDOK NORTH AVENUE 1',38287.6513,34686.6961,'BASEMENT CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',1,2.8,'Y','1.3299669382159474,103.92575881889982');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B49','BLK 549/551 BEDOK NORTH AVENUE 1',38388.8477,34932.0469,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3321857665418388,103.92666820717177');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B50','BLK 601/605 BEDOK RESERVOIR ROAD',36875.1304,34739.7397,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.330447090725113,103.91306656126872');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B50A','BLK 606/610 BEDOK RESERVOIR ROAD',36838.2461,34857.5547,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3315125775775256,103.91273516961269');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B50B','BLK 609A BEDOK RESERVOIR ROAD',36751.1433,34871.319,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,0,'N','1.3316370821543262,103.91195250661866');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B51','BLK 611/616 BEDOK RESERVOIR ROAD',37245.6836,34927.6641,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3321465000881816,103.91639624241323');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B52','BLK 617/624 BEDOK RESERVOIR ROAD',37412.3828,35122.5781,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3339091800300162,103.91789418746009');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B53','BLK 625/629 BEDOK RESERVOIR ROAD',37110.0129,35160.4187,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3342514890920405,103.91517723527485');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B54','BLK 630/632 BEDOK RESERVOIR ROAD',37112.9655,35062.2564,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.3,'N','1.3333637440670465,103.91520373671219');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B57','BLK 701/708 BEDOK RESERVOIR ROAD',37537.5855,35336.4582,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3358433944930392,103.91901927098674');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B59','BLK 716/718/721 BEDOK RESERVOIR ROAD',38310.1233,35520.6463,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.337508870708664,103.925961024054');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B6','BLK 204/209 NEW UPPER CHANGI ROAD',38797.4548,34284.616,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,4.5,'N','1.3263304964828235,103.9303395393729');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B6M','BLK 208A NEW UPPER CHANGI ROAD',38858.3585,34156.6609,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',8,2.15,'N','1.3251732958769233,103.93088674617249');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B6T','BLK 23 BEDOK SOUTH AVENUE 1',39044.9784,33995.6053,'SURFACE CAR PARK','COUPON PARKING','WHOLE DAY','NO','YES',0,0,'N','1.3237167011755582,103.9325635663257');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B60','BLK 722/725 BEDOK RESERVOIR ROAD',38654.6406,35490.0933,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.337232441064397,103.92905669849999');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B63','BLK 739/745 BEDOK RESERVOIR ROAD',37937.9062,35591.9375,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3381537269767942,103.92261646334421');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B65','BLK 155/172 BEDOK SOUTH ROAD/AVE 3',40502.4219,33588.332,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,5.4,'N','1.3200329104338957,103.94565928752294');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B65M','BLK 154 BEDOK SOUTH ROAD',40577.3467,33351.3208,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',7,2.15,'N','1.3178894383908382,103.9463324279342');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B66','BLK 637A BEDOK RESERVOIR ROAD',35903.9044,34750.8852,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,1.9,'N','1.33054815487274,103.90433956320607');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B67','BLK 649A JALAN TENAGA',36132.6219,34913.1736,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',6,1.9,'N','1.332015772086145,103.90639475945399');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B68','BLK 10A BEDOK SOUTH AVENUE 2',39530.0381,33861.6257,'MULTI-STOREY CAR PARK','COUPON PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,1.9,'N','1.3225048596873967,103.93692202997929');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B69','BLK 94A BEDOK NORTH AVENUE 4',40091.8567,35069.2759,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,1.9,'N','1.3334261836375532,103.9419707361937');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B7','BLK 211/218 BEDOK NORTH STREET 1',38973.5423,34152.0151,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,4.5,'N','1.325131239733241,103.93192173162572');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B7A','BLK 216/218 BEDOK NORTH ST 1',39208.9372,34373.2247,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,2.15,'N','1.3271316923454208,103.93403695950919');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B7B','BEDOK CENTRAL',39298.3108,34305.7565,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','NO','NO',0,0,'N','1.3265215017534207,103.93484000406866');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B70','BLK 201 BEDOK NORTH ST 1',38536.5889,34280.1109,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,0,'N','1.3262898453461367,103.92799551906191');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B71','BLK 29C CHAI CHEE AVENUE',38125.3637,34059.3926,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2,'N','1.3242938891077893,103.9243003689824');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B72','BLK 660A JALAN TENAGA',36243.3489,35174.2762,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2,'N','1.3343770595975362,103.90738977380713');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B73','BLK 651A JALAN TENAGA',36196.3322,34965.864,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',9,2,'N','1.332492267852263,103.90696724615174');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B74','BLK 671A JALAN DAMAI',36428.7057,35005.0793,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',8,2,'N','1.3328468531231128,103.90905526271878');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B75','BLK 613C BEDOK RESERVOIR ROAD',37379.8318,35029.8453,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.33307054846192,103.91760166991952');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B76','BLK 761A BEDOK RESERVOIR VIEW',39251.41,35342.7343,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',9,2.15,'N','1.3358995643003435,103.9344189574038');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B77','BLK 765A BEDOK RESERVOIR VIEW',39464.4992,35319.6825,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',9,2.15,'N','1.3356910123179635,103.93633367546337');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B78','BLK 769A BEDOK RESERVOIR VIEW',39692.6527,35310.6109,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',9,2.15,'N','1.3356088847994054,103.93838375965704');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B79','BLK 772A BEDOK RESERVOIR VIEW',39583.9006,35439.6773,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3367761554500215,103.93740660996897');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B8','BLK 201/203 BEDOK NORTH STREET 1',38567.8313,34234.9589,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,4.5,'N','1.3258814963794465,103.92827623307666');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B80','BLK 739A BEDOK RESERVOIR ROAD',38020.7204,35604.61,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',6,2.15,'N','1.3382683050605575,103.92336060080387');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B81','BLK 30A NEW UPPER CHANGI ROAD',39309.7384,33939.7118,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',11,2.15,'N','1.3232111239847677,103.93494255225349');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B82','BLK 509B BEDOK NORTH STREET 3',38805.8064,35117.6383,'SURFACE CAR PARK','COUPON PARKING','WHOLE DAY','NO','YES',0,0,'N','1.3338640412915765,103.93041487733433');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B83','BLK 21A CHAI CHEE ROAD',37899.5392,34299.8988,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3264690135495145,103.92227129473213');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B84','BLK 215A BEDOK CENTRAL',39227.6155,34273.0906,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',12,2.15,'N','1.32622610951431,103.93420475731571');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B85','BLK 184 BEDOK NORTH RD',40023.6834,34256.9953,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',6,2.15,'N','1.3260802458197953,103.9413578420037');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B86','BLK 114A BEDOK NORTH ST 2',39379.4586,34770.0381,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',4,2.15,'N','1.3307202632277364,103.9355693327068');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B87','BLK 13A BEDOK SOUTH RD',39449.3971,33644.4324,'MULTI-STOREY CAR PARK','COUPON PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',4,2.15,'N','1.3205406737790832,103.93619734820163');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B88','BLK 34A BED0K SOUTH AVE 2',39683.2391,33835.9985,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',2,2.15,'N','1.3222730385459662,103.93829861018826');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B89','BLK 116A BEDOK NORTH ROAD',39568.2194,34796.4641,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',7,2.15,'N','1.3309591788891948,103.93726546144438');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B9','BLK 402/403 BEDOK NORTH AVENUE 3',39184.2416,34709.4842,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3301727085826485,103.9338151792443');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B90','BLK 35A BEDOK SOUTH AVE 2',39831.9791,33865.2621,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',2,2.15,'N','1.3225376305100722,103.93963512682517');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B91','BLK 630 BEDOK RESERVOIR ROAD',37007.0862,34999.621,'BASEMENT CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',1,2.15,'Y','1.3327973239279605,103.91425233336784');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B92','BLK 2A BEDOK SOUTH AVE 1',39197.6251,33772.3265,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',6,2.15,'N','1.3216973941844892,103.93393509513587');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B93','BLK 19A BEDOK SOUTH ROAD',39224.3984,33631.2777,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',8,2.15,'N','1.320421790868974,103.93417561555712');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B94','BLK 513A BEDOK NORTH AVE 2',38688.1313,34940.2851,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',7,2.15,'N','1.3322601658153155,103.92935743869764');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B94A','BLK 512 TO 518, 554 BEDOK NORTH AVE 2',38668.2981,34834.5151,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3313036277380605,103.92917918947829');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B95','BLK 220 BEDOK CENTRAL',39325.3283,34194.2403,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',13,2.15,'N','1.3255129802698544,103.9350827294628');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B96','BLK 219 BEDOK CENTRAL',39088.1581,34133.7804,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',11,2.15,'N','1.3249662903465638,103.93295160832379');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B97','BLK 714A BEDOK RESERVOIR ROAD',38037.1417,35371.0192,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',6,2.15,'N','1.3361557898964023,103.92350807855593');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B98','BLK 748 BEDOK RESERVOIR CRESCENT',37860.0561,35362.5681,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',7,2.15,'N','1.3360794194920385,103.92191686099008');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('B99M','BLK 807 CHAI CHEE ROAD',37954.0727,34412.5835,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',5,2.15,'N','1.3274880750733322,103.9227613439326');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CAM','BLK 88 TANGLIN HALT RD',24092.2494,31574.3039,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',5,2.15,'N','1.3018210574313116,103.79820565809393');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CCKC','309 CHOA CHU KANG AVE 4',18254.4236,40780.2921,'BASEMENT CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',1,2.1,'Y','1.3850753626994696,103.74574719528964');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CCM','BLK 84A COMMONWEALTH CLOSE',24269.3904,31777.7395,'MULTI-STOREY CAR PARK','COUPON PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2.15,'N','1.3036608788452495,103.7997973262448');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CC1','BLK 1/2 CHAI CHEE STREET',37970.7792,34316.7372,'SURFACE CAR PARK','COUPON PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,0,'N','1.3266212706584415,103.92291142962787');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CC10','BLK 43/45 CHAI CHEE STREET',38267.4015,34545.0259,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.328685731614716,103.92557681585446');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CC11','BLK 50/54 CHAI CHEE STREET',37828.6078,34590.3599,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3290958607447734,103.92163403144221');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CC12','BLK 11 CHAI CHEE ROAD',38194.9297,34332.7592,'BASEMENT CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',2,2.15,'Y','1.3267660935698462,103.9249255468732');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CC4','BLK 22/24, 59/63, 803/805 CHAI CHEE ROAD',37801.1879,34221.6662,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,5.4,'N','1.325761538242785,103.92138753079271');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CC5','BLK 27 CHAI CHEE ROAD',38025.2345,34117.8358,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,0,'N','1.3248224611390984,103.92340067458183');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CC6','BLK 25-27 CHAI CHEE ROAD',38043.4844,33973.1328,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,4.5,'N','1.3235138140220333,103.92356461224138');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CC7','BLK 30/40 CHAI CHEE AVENUE',38279.717,34164.7007,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3252462054528282,103.92568734971881');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CC8','BLK 55/58 CHAI CHEE DRIVE',37584.5733,34347.0451,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.326895488242421,103.91944117263687');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CC9','BLK 41/42 CHAI CHEE STREET',38313.9557,34438.2547,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3277201161996692,103.92599509455695');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CDM','BLK 54 C''WEALTH DR',23934.8536,31553.8887,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',11,2.15,'N','1.3016364093624113,103.79679138790385');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CKM1','BLK 429A CHOA CHU KANG AVENUE 4',17706.6149,40616.7716,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2,'N','1.3835963556122934,103.74082478082065');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CKM2','BLK 625A CHOA CHU KANG STREET 62',18365.515,42251.984,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',11,2.15,'N','1.3983848378100412,103.74674494947023');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CKM3','BLK 445A CHOA CHU KANG AVE 4',17241.061,40350.4217,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2.15,'N','1.381187418093136,103.73664153064173');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CKM4','BLK 474A CHOA CHU KANG AVE 3',17384.4024,40068.5078,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3786379456153655,103.73792965982501');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CKM5','BLK 450A CHOA CHU KANG AVE 4',17135.7982,40142.8636,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',11,2.15,'N','1.3793103007570013,103.73569574377184');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CKM6','BLK 462A CHOA CHU KANG AVE 4',17141.5616,39946.6052,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2.15,'N','1.37753541473403,103.73574760435896');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CKM7','BLK 483A CHOA CHU KANG AVE 5',17288.8253,39773.897,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3759735599231606,103.73707093730049');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CKM8','BLK 486A CHOA CHU KANG AVE 5',17432.5108,39671.7658,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3750499752188077,103.73836209062019');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CKM9','BLK 297B CHOA CHU KANG AVE 2',17981.6699,39927.7497,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',9,2.15,'N','1.377365191602342,103.74329658894608');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CKT1','BLK BETWEEN 404 & 426 CHOA CHU KANG AVENUE 1/4',17457.2727,40253.9548,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,0,'N','1.380315085920983,103.73858438589501');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CKT2','BLK 302 CHOA CHU KANG LOOP',17986.1193,40839.8157,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,4.5,'N','1.3856135812488513,103.74333625964965');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CK1','BLK 101/108 TECK WHYE LANE',19169.1019,39939.7774,'SURFACE CAR PARK','ELECTRONIC PARKING','NO','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3774743473121365,103.753966519044');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CK10','BLK 227A CHOA CHU KANG CENTRAL',18219.6466,40274.898,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2,'N','1.3805047532205248,103.74543486598357');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CK11','BLK 287A CHOA CHU KANG AVENUE 2',17822.7967,40079.0923,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2,'N','1.3787338234756623,103.74186894657916');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CK12','BLK 409/413 CHOA CHU KANG AVE 3',17816.8828,40361.3125,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,4.5,'N','1.3812861166246784,103.74181570834476');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CK13','BLK 414-420 CHOA CHU KANG AVENUE 4',17841.917,40541.616,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,4.5,'N','1.3829167235416242,103.74204059676565');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CK14','BLK 278/287 CHOA CHU KANG AVENUE 2/3',17896.2294,40234.6907,'SURFACE CAR PARK','ELECTRONIC PARKING','NO','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3801410233600857,103.74252873931746');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CK15','BLK 288/295 CHOA CHU KANG AVENUE 2/3',17716.2981,40045.082,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,0,'N','1.3784262097063238,103.74091199127962');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CK16','BLK 401/408 CHOA CHU KANG AVE 3',17528.125,40178.0781,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,0,'N','1.3796289105733506,103.73922107254207');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CK17','BLK 421/428 CHOA CHU KANG AVENUE 4',17691.7227,40448.332,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,0,'N','1.3820730449413998,103.74069102239307');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CK18','BLK 130/132 CHOA CHU KANG AVE 1',18797.0391,40329.4648,'SURFACE CAR PARK','ELECTRONIC PARKING','NO','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3809984226086809,103.75062314406694');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CK19','BLK 133/134 TECK WHYE LANE',18875.7734,40272.4492,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-7PM','SUN & PH FR 7AM-10.30PM','NO',0,0,'N','1.3804828191297818,103.7513306473736');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CK2','BLK 109/117 TECK WHYE LANE',18880.332,40136.4375,'SURFACE CAR PARK','ELECTRONIC PARKING','NO','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3792527806804915,103.75137165184242');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CK20','BLK 429, 438-441 CHOA CHU KANG AVENUE 4',17629.7003,40593.1789,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.383382964748632,103.74013365429617');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CK22','BLK 343A CHOA CHU KANG LOOP',18276.2056,40644.1197,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',11,1.9,'N','1.3838438770093517,103.74594296799225');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CK23','BLK 430-437 CHOA CHU KANG AVENUE 4',17782.5234,40677.3633,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3841443511993476,103.74150685405424');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CK24','BLK 350-351 CHOA CHU KANG CENTRAL',17983.1711,40586.8844,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','NO','NO',0,0,'N','1.383326163012073,103.74330985413658');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CK25','BLK 352-355 CHOA CHU KANG CENTRAL',18031.459,40472.3086,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','NO','NO',0,0,'N','1.3822899983079155,103.74374379564664');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CK26','BLK 302, 304-308 CHOA CHU KANG LOOP',17943.7793,40730.3711,'SURFACE CAR PARK','COUPON PARKING','WHOLE DAY','NO','YES',0,0,'N','1.3846237901647562,103.74295584042696');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CK28','BLK 276A CHOA CHU KANG AVENUE 2',18079.0694,40228.4669,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2,'N','1.3800848001567996,103.74417169247384');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CK29','BLK 276/277 CHOA CHU KANG AVENUE 2',18072.2888,40190.9725,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,0,'N','1.379745712337052,103.74411077646073');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CK3','BLK 118/124 TECK WHYE LANE',18734.6348,40064.9164,'SURFACE CAR PARK','ELECTRONIC PARKING','NO','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3786059243997977,103.75006247869959');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CK3A','BLK 118A TECK WHYE LANE',18725.4974,40162.9532,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3794925303032597,103.74998034167601');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CK30','BLK 248/250 CHOA CHU KANG AVENUE 2',18213.6543,40111.7031,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3790288766966712,103.74538107497969');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CK31','BLK 251A CHOA CHU KANG AVENUE 2',18164.3898,40080.8939,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',9,2,'N','1.3787502331490429,103.74493840789525');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CK32','BLK 253A CHOA CHU KANG AVE 1',18055.7989,39931.0181,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',5,2,'N','1.3773947750358428,103.74396269033357');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CK33','BLK 502A CHOA CHU KANG STREET 51',17943.2973,41180.8424,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',7,1.9,'N','1.388697685879254,103.74295135477603');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CK34','BLK 511A CHOA CHU KANG STREET 51',17736.9363,41167.5327,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',9,2,'N','1.3885772458034669,103.74109704842282');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CK35','BLK 513A CHOA CHU KANG STREET 51',17881.6424,41361.0029,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2,'N','1.3903269693827938,103.74239727614717');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CK36','BLK 527A CHOA CHU KANG STREET 51',17735.8704,41577.6177,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',9,1.9,'N','1.3922859022308816,103.74108732653997');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CK37','BLK 552A CHOA CHU KANG STREET 52',17863.0257,41773.0092,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,1.9,'N','1.3940529952860854,103.7422298477562');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CK38','BLK 541A CHOA CHU KANG STREET 52',18148.0534,41666.0012,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,1.9,'N','1.3930853528194667,103.74479108110928');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CK39','BLK 559A CHOA CHU KANG NORTH 6',18090.945,42004.5732,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',11,2,'N','1.3961472532491073,103.74427780249434');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CK4','BLK 135-138,141,142 & 145 TECK WHYE LANE/AVE',18912.6962,40234.9502,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,1.8,'N','1.3801437034327237,103.75166243741155');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CK4A','BLK 144/145 TECK WHYE LANE/AVE',18972.5753,40347.8975,'SURFACE CAR PARK','COUPON PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,1.8,'N','1.3811651758839605,103.75220046039226');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CK40','BLK 567A CHOA CHU KANG STREET 52',18298.9982,41919.8106,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',11,1.9,'N','1.395380762135428,103.74614735348564');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CK41','BLK 708A CHOA CHU KANG STREET 53',18333.4408,41430.698,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',11,2,'N','1.3909574199697599,103.74645700945592');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CK42','BLK 754A CHOA CHU KANG NORTH 5',18363.8684,41631.0171,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',11,1.95,'N','1.3927690420626113,103.7467303588618');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CK44','BLK 762A CHOA CHU KANG NTH 5',18631.6662,41611.081,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2,'N','1.3925888350648057,103.7491367373063');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CK45','BLK 771A CHOA CHU KANG ST 54',18724.0529,41824.3887,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2,'N','1.394517940974819,103.74996683599052');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CK46','BLK 792A CHOA CHU KANG NTH 6',18675.6762,41907.1414,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2,'N','1.395266310343541,103.74953210680319');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CK47','BLK 787A CHOA CHU KANG DRIVE',18471.7225,41904.1787,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2,'N','1.3952394503711885,103.74769942278269');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CK48','BLK 604A CHOA CHU KANG ST 62',18189.9873,42143.3391,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2,'N','1.3974022344611845,103.74516772920894');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CK49','BLK 610A CHOA CHU KANG ST 62',18006.9629,42295.9806,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',9,2,'N','1.3987826049446004,103.74352305674668');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CK5','BLK 139 & 140 TECK WHYE LANE/AVE',19030.3926,40238.918,'SURFACE CAR PARK','COUPON PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,0,'N','1.380179623066984,103.75272002464263');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CK50','BLK 611A CHOA CHU KANG ST 62',18031.8277,42477.9839,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',9,2,'N','1.4004285839443864,103.74374642444515');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CK51','BLK 621A CHOA CHU KANG NORTH 7',18459.6171,42391.2166,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',10,2,'N','1.3996440372231296,103.74759048649082');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CK52','BLK 659A/660A/661A CHOA CHU KANG CRESCENT',18754.0711,42503.4389,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',6,2.15,'N','1.400659030128732,103.75023635729681');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CK53','BLK 668A CHOA CHU KANG CRESCENT',18748.505,42602.4434,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.4015543884980117,103.75018630981081');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CK54','BLK 638-643 CHOA CHU KANG STREET 64',18629.4583,42224.5521,'BASEMENT CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',2,2.15,'Y','1.3981368406612198,103.74911670029505');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CK55','BLK 631-637 & 636A CHOA CHU KANG NORTH 6',18561.8248,42111.2701,'COVERED CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,2.15,'N','1.3971123380650974,103.74850899592623');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CK56','BLK 675A CHOA CHU KANG CRESCENT',18357.265,42562.8339,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',9,2,'N','1.4011960465890232,103.7466707134057');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CK57','BLK 669A CHOA CHU KANG CRESCENT',18541.2289,42678.1909,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2,'N','1.4022393536094306,103.74832374074036');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CK58','BLK 678A CHOA CHU KANG CRESCENT',18157.8829,42638.4707,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',13,2.15,'N','1.4018800104107763,103.74487907782583');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CK59','BLK 297A CHOA CHU KANG AVE 2',17841.6171,39866.5767,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',11,2.15,'N','1.3768119174004938,103.74203813468691');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CK6','BLK 143, 144 & 146 TECK WHYE LANE',19073.3023,40300.0728,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','NO','NO',0,0,'N','1.3807326977622523,103.75310558123046');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CK6A','BLK 146A 146A TECK WHYE AVENUE',19076.7918,40333.5431,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',5,2.15,'N','1.3810353919401894,103.75313692680994');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CK60','BLK 683 CHOA CHU KANG CRESCENT',18268.595,42905.4416,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.4042944339787446,103.74587382647135');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CK61','BLK 686 CHOA CHU KANG CRESCENT',18607.321,42882.7597,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',13,2.15,'N','1.40408941986099,103.7489175658637');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CK62','BLK 687 CHOA CHU KANG DRIVE',18715.5324,42855.1194,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.403839486324841,103.74988994322811');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CK63','BLK 689 CHOA CHU KANG CRESCENT',18826.1888,42747.1959,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.4028635015212756,103.75088431616422');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CK64','BLK 692 CHOA CHU KANG CRESCENT',18872.7705,42404.3378,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',13,2.15,'N','1.3997628341389776,103.75130299875013');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CK65','BLK 535,536 AND 537 CHOA CHU KANG STREET 51',18064.0069,41548.1433,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','NO','NO',0,4.5,'N','1.392019460891819,103.74403589785474');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CK66','BLK 573A CHOA CHU KANG STREET 52',18230.9826,41763.9633,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','NO','NO',4,2.15,'N','1.3939713139005383,103.74553623187555');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CK7','BLK 135A TECK WHYE LANE',18945.8673,40250.2699,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,1.8,'N','1.3802822594561714,103.7519604993514');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CK70','BLK 476 CHOA CHU KANG AVE 5',17408.5254,39880.0108,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','NO','NO','YES',8,2.15,'N','1.3769332572770216,103.73814649010535');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CK71','BLK 488 CHOA CHU KANG AVE 5',17467.9916,39852.8673,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',7,2.15,'N','1.3766878029172795,103.73868084627503');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CK72','BLK 489 CHOA CHU KANG AVE 5',17718.345,39728.0193,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',16,2.15,'N','1.3755588125241671,103.74093049457312');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CK73','BLK 801 KEAT HONG CLOSE',17994.5933,39697.5018,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',14,2.15,'N','1.375282918929695,103.74341279299837');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CK74','BLK 805 KEAT HONG CLOSE',17975.1882,39477.9306,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',6,2.15,'N','1.3732971913409113,103.74323849875061');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CK75','BLK 809 CHOA CHU KANG AVENUE 1',18119.3938,39664.2718,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',11,2.15,'N','1.3749824413018554,103.74453422557643');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CK76','BLK 810 CHOA CHU KANG AVE 7',18305.5202,39560.1044,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',7,2.15,'N','1.3740404516807108,103.74620673798105');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CK77','BLK 815 CHOA CHU KANG AVE 7',18361.9468,39838.3954,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',6,2.15,'N','1.3765572316417782,103.74671368024912');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CK78','817 KEAT HONG LINK',18660.8389,39885.9891,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',7,2.15,'N','1.3769877482261235,103.74939942553638');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CK8','BLK 201-221 CHOA CHU KANG CENTRAL',18405.5916,40449.7464,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,4.5,'N','1.3820860793135727,103.74710566112675');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CK8A','BLK 203A CHOA CHU KANG AVE 1/CENTRAL',18614.0227,40353.8181,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3812186067394712,103.74897859928703');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CK9','BLK 223-227 CHOA CHU KANG CENTRAL',18162.1088,40384.5044,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,4.5,'N','1.3814959737886148,103.7449178100558');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CK9A','BLK 228-239 CHOA CHU KANG CENTRAL',18449.8356,40217.8144,'SURFACE CAR PARK','ELECTRONIC PARKING','NO','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.379988586192663,103.74750330141984');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CLM','BLK 129A CLARENCE LANE',25894.5957,30541.7316,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2,'N','1.2924830119920758,103.81440063004618');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CLRG','312 CLEMENTI AVE 4',20283.9283,33479.407,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',13,2.15,'N','1.3190494117927232,103.76398569522');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CLTR','BLK 311 CLEMENTI AVE 4',20411.5945,33513.7467,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',13,2.1,'N','1.3193599995859138,103.7651328328665');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CM1','BLK 10 CANTONMENT CLOSE',28656.4003,28548.62,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.2744580741015783,103.83921657284013');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CR1','BLK 1/3/15/17 BEACH ROAD',31337.5185,31734.6056,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','NO','NO',0,4.5,'N','1.3032708363009524,103.86330772252771');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CR1A','BLK 2 BEACH ROAD',31521.2359,31781.8809,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,4.5,'N','1.3036983570832237,103.86495851328493');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CR1B','BLK 3 BEACH ROAD',31565.7734,31819.2245,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,4.5,'N','1.3040360743039905,103.86535870755908');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CR2','BLK 3/4 BEACH ROAD',31599.1055,31890.8184,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,0,'N','1.3046835403578914,103.86565822017198');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CR29','BLK 29/30 KELANTAN LANE',30612.5155,32012.4666,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3057837826214513,103.85679325981964');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CR3','BLK 9 NORTH BRIDGE ROAD',31450.707,31933.4004,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,4.5,'N','1.3050686537907725,103.86432479530654');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CR30','BLK 639/640 ROWELL COURT',30406.377,32213.3125,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','NO','NO',0,4.5,'N','1.307600178729994,103.85494102404743');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CR31','BLK 632/633/635 VEERASAMY ROAD',30379.3535,32063.9883,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','NO','NO',0,4.5,'N','1.3062497454836364,103.8546981936133');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CR4','BLK 7 NORTH BRIDGE ROAD',31351.9277,31854.1587,'SURFACE CAR PARK','COUPON PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,0,'N','1.304352030721032,103.86343720866738');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CR5','BLK 18/19 JALAN SULTAN',31218.4922,31730.7441,'SURFACE CAR PARK','COUPON PARKING','WHOLE DAY','NO','YES',0,0,'N','1.303235926839191,103.86223821601025');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CR6','BLK 10 NORTH BRIDGE ROAD',31342.5234,31983.7852,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,4.5,'N','1.3055243279697732,103.86335272056316');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CR7','BLK 464/463 CRAWFORD LANE',31229.7422,31984.8511,'SURFACE CAR PARK','ELECTRONIC PARKING','NO','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3055339795624585,103.86233932875297');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CSM','BLK 54 CHIN SWEE ROAD MSCP',28873.2635,29983.8819,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,1.9,'N','1.2874380741610159,103.84116520631513');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CTM1','BLK 441 COMMONWEALTH AVE WEST',20293.6227,33003.4096,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',2,2.15,'N','1.314744665034573,103.76407292318439');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CVBK','BLK 8C BOON KENG ROAD',31083.7452,33199.2328,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','NO','NO',6,2.15,'N','1.31651643285494,103.861027597963');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CV1','BLK 1/1A TELOK PAKU ROAD',45233.8667,41140.4649,'MECHANISED AND SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,3.8,'N','1.388329162827992,103.98817800327289');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CV2','BLK 3 CHANGI VILLAGE ROAD',45212.8158,41314.4339,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,0,'N','1.389902482766778,103.98798894765093');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CV3','BLK 5 CHANGI VILLAGE ROAD',45045.6516,41323.3393,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,3.8,'N','1.3899831182201972,103.9864868577462');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CV4','BLK 6 CHANGI VILLAGE ROAD',45264.5806,41344.1397,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,0,'N','1.3901710996794703,103.98845411052076');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('CY','BLK 269/269A/269B CHENG YAN COURT CAR PARK',30264.3593,31442.1456,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','NO','NO',0,0,'N','1.3006260281130524,103.85366487138313');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('C10','BLK 339,341,344-345,371-381 CLEMENTI AVENUE 5',20837.8461,33414.5726,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.318463207322816,103.76896294521615');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('C11','BLK 321-322,324-326 CLEMENTI AVENUE 5',20523.8542,33130.6004,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,4.3,'N','1.3158949898123802,103.76614163667386');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('C12','BLK 301-302,305-308 CLEMENTI AVENUE 4',20519.9139,33782.4237,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3217898443793465,103.76610607293537');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('C13M','BLK 309A CLEMENTI AVE 4',20528.1198,33646.8063,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',7,2.15,'N','1.3205633714110514,103.76617984015797');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('C14M','BLK 318A CLEMENTI AVE 4',20417.4455,33296.1766,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',2,2.15,'N','1.31739237532048,103.76518546060076');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('C15M','BLK 440 CLEMENTI AVE 3',20278.0675,33166.8296,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',6,2.15,'N','1.3162225728150843,103.76393311116514');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('C16','BLK 430-435 CLEMENTI AVE 3',20116.5191,32955.7857,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,3.5,'N','1.314313926692837,103.76248157167136');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('C17','BLK 442-444,442A CLEMENTI AVE 3',20273.9935,32905.3373,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.313857729499257,103.76389656958338');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('C18','BLK 426/428 CLEMENTI AVE 3',20215.8784,32729.9597,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,4.5,'N','1.312271662909307,103.76337442086928');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('C18A','BLK 426/427 CLEMENTI AVE 3',20306.3068,32672.9468,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-7PM','NO','NO',0,0,'N','1.3117560814715357,103.76418697824299');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('C19M','BLK 445 CLEMENTI AVE3',20269.322,32850.6337,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',14,2.15,'N','1.3133630086406858,103.76385460751854');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('C20','BLK 449-451 CLEMENTI AVE 3',20425.9232,32848.95,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.313347820827674,103.76526174661946');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('C20M','BLK 462A CLEMENTI AVENUE 3',20469.2131,32645.0967,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',18,2.15,'N','1.3115042554415306,103.76565077719528');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('C21L','BLK 454 TO 460 CLEMENTI AVE 3',20624.0039,32590.9865,'SURFACE CAR PARK','ELECTRONIC PARKING','NO','NO','NO',0,0,'N','1.3110149396716488,103.76704166044922');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('C21M','BLK 455A CLEMENTI AVE 3',20566.6991,32662.4476,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.311661194434806,103.76652673200101');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('C22M','BLK 109A CLEMENTI ST 11',20991.1005,33766.9817,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',6,1.9,'N','1.3216503041788228,103.77033993399925');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('C24','BLK 110/118 CLEMENTI STREET 13',21096.4707,34048.6484,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3241976206862742,103.77128667696404');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('C25','BLK 101-104 CLEMENTI STREET 14',20840.7482,33844.4911,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3223512364917513,103.76898892209648');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('C26','BLK 105-107 CLEMENTI STREET 12',20945.3775,33870.6421,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.3,'N','1.3225877610866086,103.76992906520302');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('C27','BLK 108/109 CLEMENTI STREET 11',21010.3372,33832.437,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.3,'N','1.322242262816822,103.77051277091039');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('C28','BLK 201/206 CLEMENTI AVENUE 6',20211.495,33712.5638,'SURFACE CAR PARK','COUPON PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,2.1,'N','1.3211579795665682,103.76333478601927');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('C28M','BLK 208 CLEMENTI AVE 6',20070.902,33845.674,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',6,2.15,'N','1.3223617440785436,103.76207145067872');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('C29','BLK 501-505 WEST COAST DRIVE',19754.8437,32767.8945,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3126146115237955,103.75923178966637');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('C29A','BLK 503 WEST COAST DRIVE',19749.6211,32629.2695,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,2.15,'N','1.3113609355931195,103.75918489896897');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('C3M','BLK 416A CLEMENTI AVE 1',20967.8189,32458.1382,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',2,2.15,'N','1.309813587633046,103.77013103455899');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('C3ML','BLK 419, 420 AND 420A CLEMENTI AVE 1',20852.22,32522.1809,'SURFACE CAR PARK','ELECTRONIC PARKING','NO','NO','NO',0,0,'N','1.3103927402801012,103.76909230827673');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('C30','BLK 507-509 WEST COAST DRIVE',19998.4863,32640.0059,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.311458097382291,103.76142107025262');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('C31','BLK 510/511 WEST COAST ROAD',19907.0039,32541.0547,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3105631944603553,103.76059908247066');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('C32','BLK 514-519 WEST COAST ROAD',19738.0729,32326.8057,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3086255588800983,103.75908121333663');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('C33','BLK 601-613 CLEMENTI WEST STREET 1',20603.5028,31877.1704,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3045594379669736,103.76685761800225');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('C34','BLK 702/703 WEST COAST ROAD',19944.5184,32148.1942,'SURFACE CAR PARK','ELECTRONIC PARKING','NO','SUN & PH FR 7AM-10.30PM','NO',0,4.5,'N','1.3070103153063926,103.76093627015362');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('C35','BLK 704-714 CLEMENTI WEST STREET 2',20000.4883,31993.6074,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3056123024137547,103.76143922562332');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('C36','BLK 728/729 CLEMENTI WEST STREET 2',20236.2232,31960.1377,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,4.5,'N','1.3053096745211656,103.76355742121387');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('C37','BLK 720-727,730-731 CLEMENTI WEST STREET 2',20282.323,31764.2687,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,2.15,'N','1.3035383171263102,103.76397169772993');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('C38','BLK 715-717 CLEMENTI WEST STREET 2',20121.5156,31683.3711,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,0,'N','1.3028066678186698,103.76252679035993');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('C39','CLEMENTI SPORTS COMPLEX',20089.6113,32510.9746,'SURFACE CAR PARK','COUPON PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.310291208264517,103.76223990537288');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('C4M','BLK 413A COMMONWEALTH AVENUE WEST',21009.1656,32642.4126,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',9,2,'N','1.3114801086975745,103.77050251295181');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('C41','CLEMENTI WOODS',20797.769,31374.2132,'SURFACE CAR PARK','COUPON PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3000109188800315,103.76860330527823');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('C5','BLK 358-360,362-363,366-367 CLEMENTI AVE 2',20905.8297,32821.8286,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.313102659052513,103.76957394864732');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('C6','BLK 328-334 CLEMENTI AVE 2',20696.2978,32975.0306,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3144881139131142,103.76769116550201');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('C7','BLK 349-355 CLEMENTI AVE 2',21037.2754,33018.7828,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3148838722797977,103.77075500850243');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('C8','BLK 335/338 CLEMENTI AVE 2',20800.9102,33216.8047,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3166746567863563,103.76863110345576');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('C9','BLK 340/342/343/346-348 CLEMENTI AVE 5',20988.0194,33324.5654,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,5.4,'N','1.317649249239499,103.77031234940915');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('DRM1','BLK 104C DEPOT ROAD',25576.6096,29218.1692,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',14,2.15,'N','1.2805131560457597,103.81154349195451');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('DRM2','BLK 112C DEPOT ROAD',25165.8976,29305.1091,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',14,2.15,'N','1.2812993757006332,103.80785308038976');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('DRM3','108A DEPOT ROAD',25390.1316,29254.1321,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',11,2.15,'N','1.2808383769937828,103.80986791310744');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('DRM4','BLK 105 DEPOT ROAD',25668.1428,29257.6985,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',3,2.15,'N','1.2808706520545836,103.81236594973795');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('DRM5','BLOCK 110 DEPOT ROAD',25346.6693,29308.7018,'BASEMENT CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',1,2.15,'Y','1.2813318825559277,103.80947738316948');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('DRS','BLK 102A/102B DEPOT ROAD',25737.908,29213.3689,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,2.15,'N','1.2804697558032994,103.81299281990017');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('DUXM','BLK 1 CANTONMENT ROAD',28860.8985,28827.1925,'BASEMENT CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','NO','NO',3,2.1,'Y','1.2769773813172818,103.8410540704323');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('DWSP','BLK 95A DAWSON ROAD',25620.1022,30938.7202,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',13,2.15,'N','1.2960732173646476,103.81193415972382');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('DWST','BLK 89A DAWSON ROAD',25626.2862,30840.6986,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','NO','NO',4,2.15,'N','1.2951867450181411,103.81198973307656');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('DWSV','BLK 85 DAWSON ROAD',25362.2059,30853.9755,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',13,2.15,'N','1.2953067953956627,103.80961685626276');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('DWVT','BLK 78A DAWSON ROAD',25420.9278,30734.4029,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',13,2.15,'N','1.2942254278456495,103.81014450777569');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('ECM','BLK 31A EUNOS CRESCENT',35602.0712,33587.8309,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2.15,'N','1.3200299878552892,103.90162713697123');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('EC2','BLK 12-25 EUNOS CRESCENT',35915.3437,33873.7578,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,5.4,'N','1.3226157282563167,103.90444212518155');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('EC3','BLK 5-8/11/4A EUNOS CRESCENT',35919.0977,33712.4297,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,0,'N','1.3211567341184236,103.90447581531453');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('EC4','BLK 1-3/1A EUNOS CRESCENT',35720.628,33641.6254,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,0,'N','1.3205164562706952,103.9026924443538');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('EC5','BLK 9-10 EUNOS CRESCENT',35717.5859,33809.3711,'SURFACE CAR PARK','COUPON PARKING','7AM-10.30PM','NO','NO',0,0,'N','1.322033488730182,103.90266515157057');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('EC7','BLK 842-848 SIMS AVENUE',35601.9233,33339.4481,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','NO','NO',0,4.5,'N','1.3177837032191524,103.90162574678307');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('EC7T','BLK 842 TO 848 SIM AVENUE',35625.1072,33420.8287,'SURFACE CAR PARK','COUPON PARKING','7AM-10.30PM','NO','NO',0,0,'N','1.3185196743293024,103.90183408598985');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('EC8','BLK 2A EUNOS MRT SIMS AVENUE',35778.02,33499.0305,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,0,'N','1.3192268648217824,103.90320810512728');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('EI1','BLK 1001-1085 EUNOS INDUSTRIAL ESTATE',35070.0793,33964.0908,'SURFACE CAR PARK','COUPON PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,0,'N','1.3234328747450637,103.89684700195524');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('EI3','BLK 410/411/414-417 EUNOS ROAD 5',35240.6635,33456.9535,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,4.5,'N','1.3188464672807614,103.89837967178805');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('EPL','BLK 1/7 EVERTON PARK',28733.8679,28847.7781,'SURFACE CAR PARK','ELECTRONIC PARKING','NO','NO','NO',0,4.5,'N','1.2771635534654588,103.83991265403958');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('EPM','BLK 6A EVERTON ROAD',28622.0835,28739.5121,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',9,2.15,'N','1.2761844360827435,103.83890822772904');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('FRM','BLK 808 FRENCH ROAD MSCP',31121.2668,32341.4155,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',9,2.5,'N','1.308758633048291,103.86136466220749');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('FR2C','BLK 3/4 QUEEN''S ROAD',25150.3008,33394.0586,'COVERED CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,2.4,'N','1.3182783907026883,103.80771256448324');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('FR2S','BLK 2/3/4 QUEEN''S ROAD',25091.4622,33354.5073,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,0,'N','1.317920697225085,103.80718387313364');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('FR3M','BLK 8A EMPRESS ROAD',24983.1434,33218.9585,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',12,2.15,'N','1.3166948314211013,103.80621058640887');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('FR4M','BLK 6A FARRER ROAD',25130.4814,33238.9594,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',3,2.15,'N','1.3168757266186237,103.80753449141054');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('GBM','BLK 60A GEYLANG BAHRU',31930.2182,33890.9953,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3227723905559787,103.86863367566639');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('GEM','BLK 118 ALJUNIED AVE 2',34041.285,33588.5472,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',9,1.8,'N','1.320036813606303,103.88760266728211');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('GEML','BLK 118 ALJUNIED AVE 2',34068.7879,33577.593,'SURFACE CAR PARK','ELECTRONIC PARKING','NO','NO','NO',0,0,'N','1.319937742298491,103.8878497929122');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('GE1A','BLK 99-106/111-112 ALJUNIED CRESCENT',33577.7747,33572.0259,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3198874888218068,103.88343778425943');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('GE1B','BLK 114-117 ALJUNIED AVENUE 2',33973.3743,33717.7668,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,0,'N','1.3212054428036488,103.88699247956042');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('GE1C','BLK 119 ALJUNIED CRESCENT',33896.2141,33557.8016,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3197587896689376,103.88629912428111');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('GE1D','BLK 1005-1012 ALJUNIED CRESCENT',34214.9727,33789.4883,'SURFACE CAR PARK','COUPON PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3218540182482401,103.88916338168022');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('GE1E','BLK 109-110 ALJUNIED CRESCENT',33687.9721,33553.6719,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3197214815258396,103.88442796153257');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('GE1F','BLK 107-108 ALJUNIED CRESCENT',33666.5701,33497.1087,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3192099481045387,103.88423564310455');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('GE1G','BLK 95 & 113 ALJUNIED CRESCENT',33897.2922,33690.8917,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,0,'N','1.3209624087674128,103.88630883704505');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('GE2','BLK 120 TO 123 GEYLANG EAST CENTRAL',33733.7656,33357.2852,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,5.4,'N','1.317945421783847,103.88483940328344');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('GE3','BLK 124 TO 128 GEYLANG EAST AVE 1',34014.6484,33308.1484,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3175009923125978,103.88736326896607');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('GE5','BLK 129-134 GEYLANG EAST AVE 1/2',34037.1328,33202.9687,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3165497802675867,103.88756528216992');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('GMLM','BLK 24 GHIM MOH LINK',22713.9209,32338.0954,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','NO','SUN & PH FR 7AM-10.30PM','YES',7,2.15,'N','1.3087283120092683,103.785820620833');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('GM1A','BLK 2A GHIM MOH ROAD',22836.9123,32767.7127,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',2,2.15,'N','1.3126136388646843,103.78692568583948');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('GM1B','BLK 5A GHIM MOH RD',22985.068,32801.7739,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',2,2.15,'N','1.3129217007451546,103.78825693218896');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('GM1M','31A GHIM MOH LINK',22552.3566,32407.3317,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',7,2.15,'N','1.3093544323655109,103.78436887624203');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('GM2','BLK 7/8/9 GHIM MOH ROAD',22974.2865,32655.7823,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3116014028826541,103.78816007877944');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('GM2A','BLK 8A GHIM MOH RD',22874.5952,32575.0244,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',5,2.15,'N','1.310871040730973,103.78726431710507');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('GM3','BLK 19/20 GHIM MOH ROAD',23051.41,32606.52,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3111559046467356,103.78885307897102');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('GM5','BLK 21 GHIM MOH ROAD',23013.32,32520.93,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,9.99,'N','1.3103818529743148,103.78851083553407');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('GM6A','BLK 13A GHIM MOH RD',23036.915,32422.5932,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','7AM-7PM','SUN & PH FR 7AM-10.30PM','NO',5,2.15,'N','1.3094925337172718,103.788722863762');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('GM6B','BLK 16A GHIM MOH ROAD',22917.7735,32435.7026,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',7,2.15,'N','1.3096110710678959,103.78765231793031');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('GSM','BLK 2 GEYLANG SERAI',35236.2639,33275.6378,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',7,2.15,'N','1.317206714246541,103.89834009661357');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('GSML','BLK 2 GEYLANG SERAI',35252.7807,33256.2338,'SURFACE CAR PARK','ELECTRONIC PARKING','NO','NO','NO',0,2.15,'N','1.3170312275382157,103.89848850385381');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HCM','BLK 104A HENDERSON CRESCENT',26691.3633,30161.685,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',11,2.1,'N','1.2890460476816035,103.82155994001779');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HDBH','BLK 480 480 LORONG 6 TOA PAYOH',29669.4119,34933.9237,'BASEMENT CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',3,2.1,'Y','1.3322044726378632,103.84831918865638');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HE1','BLK 102/103/104 HENDERSON CRESCENT',26779.8906,30181.1563,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,4.5,'N','1.2892221428532324,103.82235539347404');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HE12','BLK 78/81 REDHILL LANE',26367.5806,30069.2434,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.2882100231321911,103.8186506240624');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HE14','BLK 115 BUKIT MERAH VIEW',26768.4355,29793.2871,'SURFACE CAR PARK','COUPON PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.2857143895971888,103.82225247982512');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HE17','BLK 93/96 HENDERSON RD',26561.0277,29871.6493,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.2864230609884169,103.82038883426803');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HE19','ALEXANDRA RD',26627.3867,30326.9473,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,5.4,'N','1.290540619101063,103.82098507674468');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HE22','BLK 105 HENDERSON RD',26834.7218,30269.4645,'SURFACE CAR PARK','COUPON PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,2.2,'N','1.2900207732738587,103.82284807113028');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HE24','BLK 116 BUKIT MERAH VIEW',26627.4121,29677.5937,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.2846680932595835,103.82098533323065');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HE3','BLK 116/117 BUKIT MERAH VIEW',26708.25,29683.2227,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.2847190033878992,103.82171169354866');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HE4','BLK 121/122 & 127 BUKIT MERAH VIEW',26827.4609,29545.2148,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.2834709130566515,103.8227828558414');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HE9','BLK 118/119 BUKIT MERAH VIEW',26650.6074,29571.3613,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.2837073657315128,103.82119375672022');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG1','BLK 1,2,6,7 HOUGANG AVE 3',34773.1311,38246.9455,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,9.99,'N','1.3621655371189563,103.89417972319201');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG1A','BLK 470 UPPER SERANGOON CRESCENT',35619.4738,40071.2687,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',14,2.15,'N','1.3786638473853399,103.90178514726799');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG1B','BLK 475 UPPER SERANGOON CRESCENT',35497.5223,39745.8425,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',14,2.15,'N','1.3757208427288228,103.90068924136034');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG1C','BLK 476 UPP SERANGOON VIEW',35829.7203,39930.3842,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',8,2.15,'N','1.3773896839264785,103.90367432817467');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG1D','BLK 376 HOUGANG ST 32',34765.7308,38421.4154,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',10,2.15,'N','1.363743381472033,103.89411326609518');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG1E','BLK 377 HOUGANG STREET 32',34832.7635,38300.6631,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',5,2.1,'N','1.362651325984246,103.89471557255526');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG10','BLK 101-108 HOUGANG AVENUE 1',34361.8201,37404.5949,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,4.5,'N','1.3545477132592327,103.89048363915803');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG11','BLK 301-319 HOUGANG AVENUE 5',34862.2295,38666.4192,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3659590849526186,103.89498042855254');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG12','BLK 320-324 HOUGANG AVENUE 5',35216.1904,38747.8164,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3666951274857706,103.89816102898007');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG13','BLK 325/326 HOUGANG AVENUE 7',35261.0156,38873.8796,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3678351863527187,103.89856384493025');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG14','BLK 327-328,332-334,358-363 HOUGANG AVENUE 5',35023.2798,39024.5479,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,5.4,'N','1.3691978333065977,103.89642766021065');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG15','BLK 208-210 HOUGANG STREET 21',33942.0874,37892.5664,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,9.99,'N','1.3589608383409377,103.886712167765');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG16','BLK 211-212 HOUGANG STREET 21',34095.5904,37977.2274,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,9.99,'N','1.3597264508362596,103.88809151066717');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG17','BLK 231/233/235/237 HOUGANG STREET 21',34080.7076,37750.4416,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3576754848491686,103.8879577327896');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG18','BLK 230/232/234/236/238 HOUGANG AVENUE 1',34191.1758,37792.5508,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,2.4,'N','1.3580562825007534,103.88895037055659');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG19','BLK 138-145 LORONG AH SOO',33618.2651,37216.3433,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,5.4,'N','1.3528453827429991,103.88380228416183');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG2','BLK 15-18 HOUGANG AVE 3',34533.3906,38329.9531,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,9.99,'N','1.362916281624087,103.89202551228615');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG2A','BLK 473 UPP SERANGOON CRESCENT',35501.0297,39817.8795,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',2,2.15,'N','1.376372318247321,103.90072077615486');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG2B','BLK 933 HOUGANG AVENUE 9',33468.3697,39724.6803,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',14,2.15,'N','1.3755299072635618,103.8824558385079');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG2C','BLK 364 / 365 UPP SERANGOON RD',35112.2965,39125.1711,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',14,2.15,'N','1.3701078117066328,103.8972275612915');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG2D','BLK 581,582 AND 582A BUANGKOK GREEN',33994.2969,40153.4168,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','NO','NO',0,0,'N','1.3794071424857648,103.88718176076172');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG20','BLK 128-137 LORONG AH SOO',33910.4258,36933.0703,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,4.5,'N','1.3502835072364714,103.88642747853751');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG22','BLK 154-157 HOUGANG STREET 11',33243.2373,37175.2101,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,4.5,'N','1.3524734570237964,103.88043241313854');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG23','BLK 239-246 HOUGANG STREET 22',34480.0781,37732.4375,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,4.5,'N','1.3575125780004964,103.89154633409068');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG24','BLK 247-254 HOUGANG AVENUE 3',34496.2494,37985.1602,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,5,'N','1.3597981073399796,103.89169169862826');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG25','BLK 205 HOUGANG STREET 21',33961.8596,37988.3801,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,4.5,'N','1.3598273389629718,103.88688985311087');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG26','BLK 335-341 HOUGANG AVENUE 7',35293.1914,39057.5898,'SURFACE CAR PARK','COUPON PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3694965867905102,103.89885301179322');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG29','BLK 351-357 HOUGANG AVENUE 7',35318.5017,39372.252,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3723422711738515,103.89908052009055');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG3A','BLK 997 BUANGKOK CRESCENT',33282.6779,40818.5609,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',14,2.15,'N','1.385422602428168,103.88078745980074');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG3B','BLK 991 BUANGKOK LINK',33375.828,40694.4027,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',7,2.15,'N','1.3842997435333617,103.88162446141355');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG3C','BLK 996 BUANGKOK CRESCENT',33418.229,40968.2736,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',15,2.15,'N','1.3867765250799937,103.88200551694216');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG3D','BLK 998 BUANGKOK CRESCENT',33158.7215,40684.5984,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',11,2.15,'N','1.384211116156454,103.87967359393373');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG3E','BLK 993 BUANGKOK LINK',33602.1418,40785.1834,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',13,2.15,'N','1.3851206887907648,103.88365807896564');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG3L','BLK 993A-993B, 994A-994C, 995A-995C, BUANGKOK CRESCENT/BUANGKOK LINK',33373.4677,40905.5905,'SURFACE CAR PARK','ELECTRONIC PARKING','NO','SUN & PH FR 7AM-10.30PM','NO',0,0,'N','1.3862096500795615,103.88160329098635');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG30','BLK 464-468 HOUGANG AVENUE 10',35083.1678,39473.6275,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,2.9,'N','1.3732591319490541,103.89696590280224');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG31','BLK 414-416 HOUGANG AVENUE 10',35011.0401,39719.7005,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3754845441162968,103.89631784244257');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG32','BLK 601-608 HOUGANG AVENUE 4',33869.4973,39265.7089,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.371379058329614,103.88606016836823');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG33','BLK 609-621 HOUGANG AVENUE 8',33681.9766,39065.4219,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3695677717165735,103.88437512420182');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG34','BLK 622-632 HOUGANG AVENUE 8',33362.3594,39106.8477,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3699424715384168,103.88150314764623');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG35','BLK 701-702,707-710 HOUGANG AVENUE 2',34192.6367,38725.0781,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3664897225969852,103.88896369112094');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG36','BLK 703-706,711-712 HOUGANG AVENUE 2',34041.3045,38684.032,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3661185477855278,103.88760385900312');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG37','BLKS 501-507 HOUGANG AVENUE 8',34015.3359,39445.9023,'SURFACE CAR PARK','ELECTRONIC PARKING','NO','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.373008632916103,103.88737066764334');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG38','BLK 508-517,520-533 HOUGANG AVENUE 10',34274.4064,39391.9731,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3725208626529934,103.88969858893674');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG39','HOUGANG SPORTS COMPLEX',33859.2191,39106.9608,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3699433998718409,103.88596778014374');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG4','BLK 19-23 HOUGANG AVE 3',34417.4102,38475.2617,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,9.99,'N','1.3642304254367965,103.89098338156892');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG40','BLK 1 TO 32, 37 TO 38 DEFU LANE 10',34539.9612,37136.0181,'SURFACE CAR PARK','COUPON PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3521187630291847,103.89208429293144');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG41','BLK 633-642 & 647-648 HOUGANG AVENUE 8',33122.7539,39254.3111,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3712761200039432,103.8793501497236');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG42','BLK 643-646/649-662/665-667 HOUGANG AVENUE 8',33575.4429,39573.3197,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3741610365120829,103.88341793993871');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG43','BLK 668-680 HOUGANG AVENUE 8',33674.0721,39346.8732,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,9.99,'N','1.3721131172452121,103.88430415056773');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG44','BLK 681-684 HOUGANG AVENUES 4/8',33899.488,39516.6851,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,9.99,'N','1.3736487904344832,103.88632970593206');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG45','BLK 685-691 HOUGANG STREET 61',33877.2539,39766.0352,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3759038270817954,103.88612996620323');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG46','BLK 692-698 HOUGANG STREET 61',33969.957,39760.9531,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3758578477105796,103.88696296949902');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG47','BLK 805 HOUGANG CENTRAL',34748.896,39244.171,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',8,1.9,'N','1.3711840890820357,103.89396218073213');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG48','BLK 417-434 HOUGANG AVE 6/8/10',34763.52,39713.1288,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,9.99,'N','1.3754251700704945,103.89409369476076');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG49','BLK 435-458 HOUGANG AVE 6/8',34837.5859,40085.5664,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3787933434188147,103.89475931637922');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG5','BLK 24/25 HOUGANG AVE 3',34565.1384,38599.6502,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3653553176828919,103.8923108470268');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG50','BLK 534-545 HOUGANG AVENUE 8',34456.3578,39923.9507,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,2,'N','1.3773318360595193,103.89133366740688');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG51','BLK 546-555 HOUGANG STREET 51',34320.5249,40069.8193,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,5.4,'N','1.3786510484174086,103.89011314127207');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG52','BLK 556-566 HOUGANG STREET 51',34280.7309,40250.2304,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,9.99,'N','1.3802826296010677,103.8897556014777');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG53','BLK 830A HOUGANG CENTRAL',34386.2027,39209.6336,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',10,1.87,'N','1.3708718261551998,103.89070311870604');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG54','BLK 220-222 HOUGANG STREET 21',33679.7387,37636.4156,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,1.86,'N','1.3566443539408721,103.8843547430977');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG55','BLK 814 HOUGANG AVENUE 10',34665.4285,39409.9585,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,0,'N','1.372683430169655,103.89321220378666');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG56','BLK 830-835 HOUGANG CENTRAL',34321.5593,39246.2794,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','NO','NO',0,4.5,'N','1.37120325144932,103.89012226012069');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG57','DEFU LANE 7',35081.043,37491.8984,'SURFACE CAR PARK','COUPON PARKING','7AM-10.30PM','NO','NO',0,0,'N','1.3553370925034551,103.89694633924044');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG58','DEFU LANE 8',35056,37688.4219,'SURFACE CAR PARK','COUPON PARKING','7AM-10.30PM','NO','NO',0,0,'N','1.3571143858970327,103.89672135798848');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG59','DEFU LANE 9',34677.457,36999.3906,'SURFACE CAR PARK','COUPON PARKING','WHOLE DAY','NO','YES',0,0,'N','1.3508831228027283,103.89331974944345');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG60','BLK 548A HOUGANG STREET 51',34440.7881,40108.8916,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',11,2,'N','1.3790043779578538,103.89119380269584');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG61','BLK 559A HOUGANG STREET 51',34213.8314,40180.7212,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',7,2,'N','1.3796540278489127,103.88915444541885');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG62','BLK 566A HOUGANG STREET 51',34147.6282,40310.4206,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',10,2,'N','1.3808269962216202,103.88855958799294');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG63','BLK 465A UPPER SERANGOON ROAD',35127.5269,39373.949,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',11,2,'N','1.372357665071261,103.89736447686515');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG64','BLK 682-684 HOUGANG STREET 61',33895.9179,39593.254,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,0,'N','1.3743412526148515,103.88629764128508');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG65','DEFU LANE 11',34622.7764,36051.0336,'SURFACE CAR PARK','COUPON PARKING','7AM-10.30PM','NO','NO',0,0,'N','1.3423065359348751,103.89282820193277');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG66','DEFU LANE 12',34913.4572,35860.8756,'SURFACE CAR PARK','COUPON PARKING','7AM-10.30PM','NO','NO',0,0,'N','1.3405867501574693,103.89544009910689');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG67','BLK 401-413, 460-463 HOUGANG AVENUE 10',34955.3741,39587.9068,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3742926629562835,103.89581761240308');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG68','BLK 838A HOUGANG CENTRAL',34512.6726,39104.8807,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2,'N','1.3699244511698179,103.89183951666408');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG69','BLK 850A HOUGANG CENTRAL',34638.456,39111.1082,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2,'N','1.3699807423866348,103.8929697698494');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG7','BLK 109-127 HOUGANG AVENUE 1',34063.4941,37305.6551,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3536529994553788,103.88780296833448');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG70','BLK 567A HOUGANG STREET 51',34141.9377,40105.4776,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',10,2.15,'N','1.3789735671373302,103.88850841193016');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG71','BLK 574A HOUGANG STREET 51',33904.3999,39964.9457,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2.15,'N','1.3777026962814964,103.88637393238078');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG72','BLK 576A HOUGANG AVENUE 4',33852.9205,40066.849,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3786242831960847,103.88591137264302');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG73','BLK 909A HOUGANG STREET 91',33590.2913,40031.4783,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3783044546256256,103.88355145011192');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG74','BLK 166A HOUGANG AVENUE 1',34093.2753,36992.4181,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3508201907160524,103.88807050800904');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG75','BLK 172A HOUGANG AVENUE 1',34196.4873,36967.1434,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3505915942279874,103.88899792755912');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG76','BLK 159A HOUGANG STREET 11',33136.498,37101.9975,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',7,2.15,'N','1.3518113670729834,103.87947328009963');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG77','BLK 919A HOUGANG AVENUE 4',33667.3839,39716.3125,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2.15,'N','1.3754541941864598,103.88424412307084');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG78','BLK 925A HOUGANG STREET 91',33558.5205,39862.4297,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2.15,'N','1.3767756461828884,103.88326593439805');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG79','BLK 931A HOUGANG STREET 91',33249.7444,39781.9719,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','NO','NO',10,2.15,'N','1.3760480717091108,103.880491342577');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG80','BLK 941A HOUGANG STREET 92',33091.2937,39576.5271,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3741901308817597,103.87906751297763');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG81','DEFU LANE 1',35344.4023,38110.0508,'SURFACE CAR PARK','COUPON PARKING','7AM-10.30PM','NO','NO',0,0,'N','1.3609273751541533,103.89931294379454');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG82','DEFU LANE 2',35706.5,38048.3008,'SURFACE CAR PARK','COUPON PARKING','7AM-10.30PM','NO','NO',0,0,'N','1.3603688388032844,103.90256661623917');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG83','DEFU LANE 3',35650.3728,37831.2487,'SURFACE CAR PARK','COUPON PARKING','7AM-10.30PM','NO','NO',0,0,'N','1.3584059128852353,103.90206222069168');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG84','DEFU LANE 5',35239,37964.8945,'SURFACE CAR PARK','COUPON PARKING','7AM-10.30PM','NO','NO',0,0,'N','1.3596146600463748,103.89836579892827');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG85','DEFU LANE 6',35362.1016,38036.1953,'SURFACE CAR PARK','COUPON PARKING','7AM-10.30PM','NO','NO',0,0,'N','1.3602594484013928,103.89947196557732');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG86','BLK 946A HOUGANG STREET 92',33253.8313,39628.6415,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.374661406137119,103.8805280390918');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG87','BLK 955A HOUGANG AVENUE 9',32957.2644,39767.9074,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3759209282630822,103.87786319567921');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG88','BLK 699D HOUGANG STREET 52',34150.9965,39781.4108,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.376042822392528,103.88858974438214');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG89','BLK 435A HOUGANG AVE 8',34756.316,39980.4127,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3778423903615684,103.89402902276245');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG9','BLK 201-204 HOUGANG STREET 21',33698.1131,37886.9986,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,4.5,'N','1.3589105329110425,103.88451989671114');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG9T','BLK 206 HOUGANG ST 21',33778.1037,37858.0136,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,9.99,'N','1.3586483875723934,103.88523865940695');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG90','BLK 966A HOUGANG AVENUE 9',32955.07,39984.6887,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3778814205799572,103.87784351376946');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG91','BLK 971A HOUGANG STREET 91',33219.5565,39999.7403,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.378017495945134,103.88022012092752');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG92','BLK 373A HOUGANG STREET 31',34315.7845,38258.1777,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3622672179706894,103.89007015976657');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG93','BLK 980 BUANGKOK CRESCENT',33208.1321,40216.5463,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',13,2.15,'N','1.3799782132036214,103.88011750262257');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG94','BLK 984 BUANGKOK LINK',33267.1427,40391.5643,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',13,2.15,'N','1.3815610022490354,103.88064778773821');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG95','BLK 105 HOUGANG AVENUE 1',34319.1474,37341.5832,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',2,2.15,'N','1.3539778672243796,103.8901001842713');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG96','BLK 108 HOUGANG AVE 1',34282.3014,37198.2092,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,0,'N','1.352681252204617,103.88976906939104');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG97','BLK 804 HOUGANG AVE 10',34837.3954,39248.3805,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,0,'N','1.3712221378751506,103.89475741107438');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG98','BLK 988 BUANGKOK GREEN',32938.9335,40216.0826,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',9,2.15,'N','1.3799740663044293,103.87769855426524');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HG99','BLK 174A-174D HOUGANG AVENUE 1',34202.0544,36839.2199,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,0,'N','1.349434698985581,103.8890479251156');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HLM','BLK 533A HONG LIM MSCP',29354.6692,29687.508,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',11,1.9,'N','1.2847577556273693,103.84549081920295');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HRM','BLK 96 HENDERSON ROAD',26668.6582,29993.0383,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',9,2.15,'N','1.287520865220459,103.82135593247592');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HR1','BLK 1-3 HAIG RD',35147.8437,32640.4844,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3114626354713723,103.89754544969966');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HR2','BLK 4-6 HAIG RD',35090.332,32769.8359,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3126324573562926,103.89702870875655');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HR3','BLK 7 TO 9 HAIG RD',35018.9851,32918.853,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3139801309430952,103.89638765571095');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HR4','BLK 10 TO 14 HAIG RD',34975.9951,32997.6117,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3146924061758276,103.89600138706221');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HR5','BLK 21 TO 23 HAIG RD',34875.6086,32812.5333,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3130186460519353,103.89509932335754');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('HVM','BLK 51 HAVELOCK ROAD',27376.7446,30252.7338,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2.15,'N','1.289869482205703,103.82771837120629');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('H11','BLK 34 JALAN BUKIT HO SWEE',27390.4513,29983.9052,'SURFACE CAR PARK','COUPON PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.2874382910308582,103.82784153679307');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('H12','BLK 1/5 DELTA AVE',27342.3203,30487.627,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.2919937730661062,103.82740904968816');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('H14','BLK 96 HAVELOCK ROAD MSCP',27905.0274,30102.5966,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,1.9,'N','1.288511700181495,103.832465211569');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('H15','BLK 568 GANGES AVENUE',27733.5273,30287.791,'SURFACE CAR PARK','COUPON PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.290186532294104,103.83092421133261');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('H17','BLK 28A BEO CRESCENT',27392.1841,30064.5769,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',5,2,'N','1.2881678575922197,103.82785710514734');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('H18','BLK 44A HAVELOCK ROAD',27294.4381,30155.4567,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',6,2.15,'N','1.2889897405337594,103.8269788153763');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('H3','BLK 87 ZION RD',27910.6083,30378.7005,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,2.4,'N','1.2910086868911086,103.83251535744479');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('H3BL','BLK 991A TO 991B,992A TO 992B BUANGKOK LINK',33444.3288,40713.4165,'SURFACE CAR PARK','ELECTRONIC PARKING','NO','NO','NO',0,0,'N','1.3844716847717873,103.8822399963127');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('H3DL','BLK 998A TO 998B,999A TO 999B BUANGKOK CRESCENT',33209.3106,40779.9579,'SURFACE CAR PARK','ELECTRONIC PARKING','NO','NO','NO',0,0,'N','1.3850735040392592,103.88012819207711');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('H4','BLK 22 HAVELOCK RD',27560.7129,30056.3984,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.288093896932111,103.82937140536818');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('H42A','BLK 644,645,652,655 HOUGANG AVENUE 8',33437.4888,39407.7276,'SURFACE CAR PARK','COUPON PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3726635071200903,103.88217829311445');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('H6','BLK 77/79 GANGES AVENUE',27517.5526,30418.6159,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.29136966413203,103.8289835868925');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('H6M','BLK 78A INDUS RD',27399.5432,30402.6587,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',5,2.15,'N','1.2912253507738878,103.82792322321062');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('H8','BLKS 4-8 TAMAN HO SWEE',27733.2963,30015.8248,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.2877269654910442,103.83092213801497');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('H87L','BLK 950 TO 976 HOUGANG AVE 9 /STREET 91',33038.8293,40052.7361,'SURFACE CAR PARK','COUPON PARKING','NO','NO','NO',0,0,'N','1.3784968024576356,103.87859616392002');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('H93L','BLK 978C TO 981D, 982, 987A TO 988C BUANKOK CRESCENT/GREEN',33274.8825,40196.8778,'SURFACE CAR PARK','ELECTRONIC PARKING','NO','NO','NO',0,0,'N','1.3798003264431433,103.88071730074289');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('JBM','BLK 134A JALAN BUKIT MERAH',27317.7804,29079.9207,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',11,1.9,'N','1.2792629708630556,103.82718857877008');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('JBM2','BLK 113A JLN BUKIT MERAH',27105.3295,29188.4439,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2.15,'N','1.2802444113188276,103.8252796242052');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('JB1','BLK 3-5,7,8,4A JALAN BATU',33505.3407,31638.549,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','NO','NO',0,4.5,'N','1.302401825492274,103.88278658416148');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('JB2','BLK 10-11 JALAN BATU',33528.7279,31552.9403,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','NO','NO',0,0,'N','1.3016276066884147,103.88299671364999');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('JB3','BLK 6,12,14 KAMPONG ARANG ROAD',33672.4849,31431.027,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','NO','NO',0,0,'N','1.300525040230381,103.88428841321075');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('JB4','BLK 1,2,9 KAMPONG KAYU',33547.8789,31758.125,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3034832207354379,103.88316883050382');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('JCM','BLK 2 JOO CHIAT RD',35293.685,33059.6021,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',7,1.9,'N','1.3152529513564701,103.89885600323052');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('JCML','BLK 2 JOO CHIAT RD',35269.0428,33048.779,'SURFACE CAR PARK','ELECTRONIC PARKING','NO','NO','NO',0,0,'N','1.3151550769653089,103.8986345782359');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('JKM','BLK 8A JALAN KUKOH MSCP',28629.3066,29963.8422,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',3,1.98,'N','1.2872568479780275,103.83897315415314');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('JKS','BLK 1 JALAN KUKOH CAR PARK',28703.5642,30064.2195,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.288164623459074,103.83964039101394');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('JMB1','BLK 117A JALAN MEMBINA',27298.7467,29375.368,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',14,2.15,'N','1.2819348922298388,103.82701754725305');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('JMB2','BLK 18A JALAN MEMBINA',27274.0467,29729.2354,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',14,2.15,'N','1.2851351442786731,103.8267956000755');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('JMB3','BLK 26 JALAN MEMBINA',27140.8217,29448.5025,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',13,2.15,'N','1.2825962910752642,103.8255985280811');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('JMS','BLK 4/5/6 JALAN MINYAK CAR PARK',28610.6237,30051.6694,'SURFACE CAR PARK','COUPON PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,0,'N','1.2880511267041024,103.83880528241875');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('JM1','BLK 517B JURONG WEST STREET 52',15461.2578,36356.8719,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2.15,'N','1.3450705393275175,103.72065037678253');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('JM10','BLK 648 JURONG WEST ST 61',12861.1777,35680.0784,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3389486784923128,103.69728745900903');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('JM11','BLK 686 JURONG WEST CENTRAL 1',13624.8076,35994.9675,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',6,2.15,'N','1.3417967899714978,103.70414895637855');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('JM12','BLK 624A JURONG WEST STREET 61',12989.0554,35920.273,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3411209710444365,103.69843639350871');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('JM13','BLK 601A JURONG WEST STREET 62',13134.6714,35737.8133,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',19,2.15,'N','1.3394709470052701,103.69974492611514');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('JM14','BLK 635A JURONG WEST STREET 65',13026.1447,36061.7744,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.342400674377113,103.69876959218979');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('JM15','BLK 617A JURONG WEST STREET 65',13172.241,35894.5938,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3408888288394545,103.70008243365508');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('JM16','BLK 659 JURONG WEST ST 65',13399.316,35488.4096,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3372155636603182,103.70212302793485');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('JM17','BLK 660 JURONG WEST ST 64',13617.7777,35278.113,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.335313825451302,103.70408612809914');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('JM18','BLK 629A JURONG WEST ST 65',13110.6908,36127.6675,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3429966284896666,103.69952925533713');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('JM19','BLK 273 JURONG WEST AVENUE 3',13477.0963,37120.2881,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',13,2.15,'N','1.351973692062514,103.7028211437118');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('JM2','BLK 682 JURONG WEST CENTRAL 1',13715.4817,36231.4554,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2.15,'N','1.3439355403155548,103.70496360394917');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('JM20','BLK 657 JURONG WEST STREET 65',13269.4787,35285.1266,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',14,2.15,'N','1.3353770862050354,103.70095646554981');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('JM21','BLK 651 JURONG WEST STREET 61',12848.9764,35472.8488,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.337074566706119,103.69717792676818');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('JM22','BLK 674 JURONG WEST STREET 65',13451.5242,36321.3672,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3447485419675698,103.70259174815797');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('JM23','BLK 276 JURONG WEST STREET 25',13584.64,37295.9859,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.353562688433662,103.703787405644');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('JM24','BLK 655 JURONG WEST STREET 61',12947.1123,35275.2364,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3352874843035507,103.69805983031736');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('JM25','BLK 673 JURONG WEST ST 65',13232.9976,36272.1883,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3443036800399317,103.70062818236656');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('JM26','BLK 675 JURONG WEST ST 64',13511.8473,36412.4785,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',11,2.15,'N','1.345572547207182,103.70313374298358');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('JM27','BLK 676 JURONG WEST ST 64',13673.3012,36493.4353,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',11,2.15,'N','1.3463047673601203,103.70458446329312');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('JM28','BLK 990 JURONG WEST ST 93',12683.1316,35279.6451,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',13,2.1,'N','1.33532722240945,103.69568781607877');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('JM29','BLK 986 JURONG WEST ST 93',12551.4555,35465.1802,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',14,2.1,'N','1.3370050641486007,103.69450453965243');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('JM3','BLK 679 JURONG WEST CENTRAL 1',13838.2635,36303.7106,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3445890471540412,103.7060668364871');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('JM30','BLK 271 JURONG WEST ST 24',13595.4624,36957.2314,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2.15,'N','1.3504991263574488,103.70388481388862');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('JM31','BLK 638A JURONG WEST ST 61',12894.0173,36018.9264,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',8,2.15,'N','1.3420131073387194,103.69758237259093');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('JM32','697 JURONG WEST CTRL 3',14062.3852,35973.1774,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',16,2.15,'N','1.3415999342718807,103.70808085404205');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('JM4','BLK 684 JURONG WEST ST 64',13598.5325,36287.4517,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',13,2.15,'N','1.3444418938574263,103.70391272028856');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('JM5','BLK 664 JURONG WEST ST 64',13512.8021,35739.3606,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',13,2.15,'N','1.3394851242121102,103.70314264442648');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('JM6','BLK 663 JURONG WEST ST 65',13359.4862,35709.3734,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',13,2.15,'N','1.3392138572978476,103.70176502840748');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('JM7','BLK 669 JURONG WEST ST 64',13497.6635,36071.1758,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.1,'N','1.342485928006727,103.70300645678557');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('JM8','BLK 667 JURONG WEST ST 65',13330.2931,35944.9436,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.1,'N','1.3413442507193378,103.70150259793448');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('JM9','BLK 650 JURONG WEST ST 61',12808.9157,35648.0735,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.338659212090341,103.69681787145721');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('JRM','BLK 814 JELLICOE ROAD',31175.747,32165.4237,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3071670198992562,103.86185417499212');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('JRTM','BLK 37A JALAN RUMAH TINGGI',25441.3095,30196.268,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.2893587269753017,103.81032768986444');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('JSA1','BLK 499 JURONG WEST ST 41',15969.0318,36726.9783,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3484178517821162,103.72521288102078');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('JSR2','BLK 686 JURONG WEST CTRL 1',13711.4533,36158.9284,'SURFACE CAR PARK','ELECTRONIC PARKING','NO','NO','NO',0,4.5,'N','1.343279631629845,103.70492744066382');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('JS1L','BLK 692A JURONG WEST CTRL 3',13822.1572,35914.7433,'SURFACE CAR PARK','ELECTRONIC PARKING','NO','NO','NO',0,4.5,'N','1.3410713661758118,103.70592229404829');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('JS3L','BLK 624A JURONG WEST ST 61 (SERVICE ROAD)',13008.3628,35980.6896,'SURFACE CAR PARK','ELECTRONIC PARKING','NO','NO','NO',0,4.5,'N','1.3416673654220812,103.69860985167371');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('JS4L','BLK 337 TAH CHING RD',15568.9516,35541.8105,'SURFACE CAR PARK','ELECTRONIC PARKING','NO','SUN & PH FR 7AM-10.30PM','NO',0,4.5,'N','1.337699472244186,103.72161840392612');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('JS5L','BLK 647A JURONG WEST ST 61',12820.455,35705.931,'SURFACE CAR PARK','ELECTRONIC PARKING','NO','NO','NO',0,4.5,'N','1.3391824591054655,103.69692152964437');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J1','BLK 101/107 JURONG EAST ST 13',17402.9823,35401.3306,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,5.4,'N','1.3364297229134343,103.73809826514399');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J10','BLK 246/249 JURONG EAST ST 24',17625.0718,36019.1003,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3420166824734463,103.74009365443055');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J11','BLK 250/251 JURONG EAST ST 24',17607.7146,36118.9485,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3429196669451537,103.73993765550033');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J12','BLK 252/254 JURONG EAST ST 24',17421.1122,36167.969,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.343362925276388,103.738260905311');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J13','BLK 253 JURONG EAST ST 24',17271.9009,36187.6309,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3435406873997184,103.73692014627501');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J14','BLK 256/258 JURONG EAST ST 24',17512.2512,36248.7864,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,9.99,'N','1.3440938400679208,103.73907981531556');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J15','BLK 259/264 JURONG EAST ST 24',17772.459,36243.0234,'SURFACE CAR PARK','ELECTRONIC PARKING','NO','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3440418112882941,103.74141793961762');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J16','BLK 301/304 JURONG EAST ST 32',17129.8093,36282.7747,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,9.99,'N','1.3444010818375567,103.73564333470668');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J17','BLK 305/306 JURONG EAST ST 32',17110.9062,36422.9844,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,9.99,'N','1.3456690798460311,103.73547342856531');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J18','BLK 307/308 JURONG EAST ST 32',17040.9824,36558.0742,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,9.99,'N','1.3468907567288715,103.73484507216494');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J19','BLK 309/310 JURONG EAST ST 32',16942.1133,36672.5273,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,9.99,'N','1.3479257920260928,103.73395663150133');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J2','BLK 108/110 JURONG EAST ST 13',17255.3159,35642.1729,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,9.99,'N','1.3386077600004411,103.73677131352437');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J20','BLK 311/316 JURONG EAST ST 32',16777.377,36482.1289,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3462038380151848,103.73247644634046');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J21','BLK 317/328 JURONG EAST STREET 31',16487.2598,36798.418,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,4.5,'N','1.3490641296056345,103.72986944794981');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J21A','BLK 318A JURONG EAST AVE 1',16615.6323,36620.0095,'SURFACE CAR PARK','COUPON PARKING','7AM-10.30PM','NO','NO',0,0,'N','1.347450718228742,103.7310230208162');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J22','BLK 329/333 JURONG EAST AVENUE 1',16523.8906,37047.8984,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,4.5,'N','1.3513203519971149,103.7301985030291');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J23','BLK 334/341 JURONG EAST AVENUE 1',16726.1406,36905.0234,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,4.5,'N','1.3500283203099153,103.73201589833651');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J23M','BLK 372A JURONG EAST ST 32',16739.1947,36793.4383,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',8,2.15,'N','1.3490191908456135,103.73213323917892');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J24','BLK 342/346 JURONG EAST STREET 31',16619.8437,36430.0234,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,9.99,'N','1.3457325558125939,103.73106093441035');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J25','BLK 347/350 JURONG EAST AVE 1',16684.9102,36333.9766,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,9.99,'N','1.3448639686520996,103.73164563193464');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J26','BLK 351/353 JURONG EAST STREET 31',16568.1895,36340.3828,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,9.99,'N','1.3449218597589188,103.73059682433131');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J27','BLK 521/524 JURONG WEST STREET 52',15018.2256,36557.7852,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3468873357936137,103.71666938291034');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J28','BLK 525/527 JURONG WEST STREET 52',14999.1709,36634.0039,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3475766209296056,103.71649813216095');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J29','BLK 528/534 JURONG WEST STREET 52',15045.9395,36750.0547,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3486261611752683,103.71691832637025');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J3','BLK 111/116 JURONG EAST ST 13',17112.1421,35740.2671,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3394948365194097,103.73548477934001');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J30','BLK 530/536 JURONG WEST STREET 52',14888.3145,36770.8398,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3488140652463985,103.7155019611289');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J32','BLK 515/517 JURONG WEST STREET 52',15441.7334,36438.2695,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3458066607061008,103.72047490460963');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J33','BLK 518/520 JURONG WEST STREET 52',15152.9335,36434.7257,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3457744896852935,103.71787986661185');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J34','BLK 513/514 JURONG WEST STREET 52',15398.4307,36577.707,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3470676632759224,103.72008574579381');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J35','BLK 508/511 JURONG WEST STREET 51/52',15335.207,36693.7578,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3481171567409567,103.71951759408667');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J36','BLK 543/551 JURONG WEST STREET 42',14883.267,37142.1353,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,9.99,'N','1.3521719203242173,103.7154564445066');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J37','BLK 537/542 JURONG WEST AVENUE 1',14921.6961,37045.2742,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3512959616988443,103.71580179588177');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J38','BLK 505/508 JURONG WEST STREET 52',15231.4766,36804.4414,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,4.5,'N','1.349118093824851,103.71858546676636');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J39','BLK 456-461 JURONG WEST STREET 41',15538.8643,36919.3594,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3501574988556229,103.72134748501942');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J4','BLK 201/206 JURONG EAST ST 21',17826.3697,35522.9964,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,4.5,'N','1.3375301693185266,103.74190260101675');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J40','BLK 462-467 JURONG WEST STREET 41',15709.2368,36905.2238,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.350029732229149,103.72287839228024');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J41','BLK 468-473 JURONG WEST STREET 41',15615.0684,36712.7969,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.348289456244436,103.72203231052204');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J42','BLK 474 JURONG WEST STREET 41',15786.7041,36706.2305,'SURFACE CAR PARK','COUPON PARKING','NO','NO','NO',0,9.99,'N','1.3482301426246206,103.72357456416027');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J43','BLK 474-477 JURONG WEST STREET 41',15975.2217,36672.4648,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3479248544356457,103.72526852277497');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J44','BLK 478-483 JURONG WEST STREET 41',15904.8789,36553.3516,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3468476106370064,103.72463649779986');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J45','BLK 484-491 JURONG WEST AVENUE 1',16144.0439,36789.7031,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3489851813579015,103.72678544658422');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J46','BLK 501/504 JURONG WEST STREET 51',15284.1084,36874.7695,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,9.99,'N','1.3497541372772135,103.71905836585934');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J47','BLK 502/503 JURONG WEST AVENUE 1',15168.6443,36930.4317,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,4.5,'N','1.3502574761113662,103.71802082662984');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J48','BLK 441/455 JURONG WEST AVE 1/ST 42',15219.7479,37142.2128,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3521727670439512,103.71847993384819');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J49','BLK 552/559 JURONG WEST STREET 42',15272.0103,37284.0817,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,9.99,'N','1.3534557986298217,103.71894948384072');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J49M','560 JURONG WEST ST 42',15352.863,37320.212,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.353782581926777,103.71967598067624');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J5','BLK 207/208 JURONG EAST ST 21',17883.7508,35609.7189,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3383144751258276,103.74241817422426');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J50','BLK 401/408 JURONG WEST STREET 42',15669.4749,37311.863,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3537072091984124,103.7225209404907');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J51','BLK 409/416 JURONG WEST STREET 42',15904.1348,37295.1406,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,9.99,'N','1.3535560740797037,103.72462951363374');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J52','BLK 423/440 JURONG WEST AVE 1/ST 42',15900.1895,37060.7578,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,9.99,'N','1.3514364016790459,103.72459415698256');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J53','BLK 417/422 JURONG WEST STREET 42',16137.4785,36983.8477,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3507409504176193,103.72672637598922');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J54','BLK 492-496 JURONG WEST STREET 41',15890.8105,36893.8086,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3499265714395001,103.72450994802132');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J55','BLK 497-498 JURONG WEST STREET 41',15866.4258,36751.25,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.348637314625562,103.72429089393327');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J56','BLK 130 JURONG GATEWAY ROAD',17537.9507,35231.3632,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,9.99,'N','1.334892647114508,103.739311091351');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J57','BLK 131/134 JURONG GATEWAY ROAD',17516.667,35130.0187,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,9.99,'N','1.3339761172627207,103.73911988019672');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J57L','BLK 131 JURONG GATEWAY ROAD',17598.8143,35184.3604,'SURFACE CAR PARK','ELECTRONIC PARKING','NO','NO','NO',0,9.99,'N','1.334467592004369,103.7398580011145');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J58','BLK 132 JURONG GATEWAY ROAD',17576.3345,35155.1132,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',8,2,'N','1.3342030833182368,103.73965601749399');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J6','BLK 209/214 JURONG EAST ST 21',17486.8128,35693.066,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3390681000476905,103.73885142891032');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J60L','BLK 505 JURONG WEST ST 52',15152.11,36874.8285,'SURFACE CAR PARK','ELECTRONIC PARKING','NO','NO','NO',0,4.5,'N','1.3497546144769683,103.71787227953165');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J60M','505A JURONG WEST ST 52',15155.3093,36830.6309,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',13,2.15,'N','1.3493549092892663,103.71790104604126');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J61','BLK 912/932 JURONG WEST STREET 92',11874.875,35804.875,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,9.99,'N','1.340076780003902,103.68842490797132');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J62','BLK 902/908 JURONG WEST STREET 91',11539.0898,35894.793,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,9.99,'N','1.3408897822679073,103.68540763961389');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J62M','BLK 901 JURONG WEST STREET 91',11666.8136,35782.3574,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',5,1.9,'N','1.3398730274812336,103.68655537092351');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J63','BLK 909/911 JURONG WEST STREET 91',11654.2969,35993.1406,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,9.99,'N','1.341779262833751,103.68644278769794');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J64','BLK 354 JURONG EAST AVE 1',16707.915,36290.7825,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,1.9,'N','1.3444733458300595,103.73185235993427');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J65','BLK 933-953 JURONG WEST STREET 91',11971.8174,36102.7266,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,9.99,'N','1.34277048726823,103.68929583272269');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J66','BLK 959-961 JURONG WEST STREET 92',12175.81,35939.8984,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,9.99,'N','1.3412980393930454,103.6911289087004');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J67','BLK 962-966 JURONG WEST STREET 91',12357.588,35978.1413,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,9.99,'N','1.3416439885155285,103.69276226807094');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J68M','BLK 962A JURONG WEST STREET 91',12264.1306,36023.6972,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',9,1.9,'N','1.3420559299413872,103.69192247618548');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J69','BLK 974/980 JURONG WEST STREET 93',12455.3311,35761.7852,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4,'N','1.3396873972151573,103.69364065669575');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J69M','BLK 967 JURONG WEST 91 JURONG WEST STREET 93',12422.54,35944.981,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',7,2.15,'N','1.3413441331084195,103.69334591602572');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J7','BLK 215A/231 JURONG EAST ST 21',17395.7576,35966.8282,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3415438729036937,103.73803314961162');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J70','BLK 835/838 JURONG WEST STREET 81',12440.6748,36204.0469,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3436870354700452,103.69350873447144');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J71','BLK 812/826 JURONG WEST STREET 81',12514.7743,36484.9714,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.346227647560591,103.69417441757996');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J72','BLK 743/751 JURONG WEST STREET 73',12910.9012,36599.9072,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,9.99,'N','1.3472672849626481,103.69773379422605');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J73','BLK 719/731 JURONG WEST STREET 72',12965.2227,36238.1133,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,9.99,'N','1.3439953859260412,103.69822208525477');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J74','BLK 711/718 JURONG WEST STREET 71',12730.417,36090.9727,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,9.99,'N','1.342664584069249,103.69611229344058');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J74M','BLK 712B JURONG WEST ST 71 JURONG WEST STREET 71',12812.9485,36110.9309,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',5,2.15,'N','1.3428451201999902,103.69685387663056');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J75M','BLK 841A JURONG WEST STREET 81',12397.1268,36260.1612,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,1.9,'N','1.3441944891692896,103.69311740148584');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J76M','BLK 832A JURONG WEST STREET 81',12554.243,36272.307,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',11,1.9,'N','1.3443044123065464,103.69452917581451');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J77M','BLK 750A JURONG WEST STREET 73',13002.919,36619.5998,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,1.9,'N','1.347445423506806,103.69856061913083');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J78M','BLK 702A JURONG WEST STREET 71',12620.3435,35969.4867,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,1.9,'N','1.34156585497183,103.69512328117342');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J79M','BLK 821A JURONG WEST STREET 81',12599.8443,36515.2018,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',11,2,'N','1.3465010835318134,103.69493880629841');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J8','BLK 232/240 JURONG EAST ST 21',17789.8162,35843.6681,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.340430194313866,103.74157403903644');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J8M','BLK 240C JURONG EAST AVE 1',17884.6894,35867.6356,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2.15,'N','1.3406469795967773,103.74242652213053');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J80M','BLK 734A JURONG WEST STREET 73',13270.9893,36409.7045,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',11,2,'N','1.3455473430034546,103.70096949302328');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J81M','BLK 760A JURONG WEST STREET 74',13182.8539,36856.8882,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',11,1.9,'N','1.3495914590692826,103.700177324868');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J82M','BLK 844A JURONG WEST ST 81',12322.8738,36443.2248,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2,'N','1.3458500076506834,103.6924501001392');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J83M','BLK 865A JURONG WEST ST 81',12613.8496,36926.4932,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',8,2,'N','1.3502206530155643,103.69506444233126');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J84M','BLK 854A JURONG WEST ST 81',12771.2097,36650.4919,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2,'N','1.3477246830725262,103.69647855749301');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J85M','BLK 859A JURONG WEST ST 81',12744.1045,36899.5648,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',8,2,'N','1.3499771895467572,103.69623487505143');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J86M','BLK 764A JURONG WEST ST 74',13061.8605,36897.8976,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',8,2,'N','1.3499622723359204,103.69909010573176');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J88M','BLK 692A JURONG WEST CENTRAL 1',13965.0447,35981.9547,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',12,2.15,'N','1.3416792676491895,103.70720618934286');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J89M','BLK 691A JURONG WEST CENTRAL 1',13819.7717,36058.9311,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2.1,'N','1.342375345079632,103.70590079148498');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J9','BLK 241/245 JURONG EAST ST 24',17837.3306,36030.7859,'SURFACE CAR PARK','ELECTRONIC PARKING','NO','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3421224351689947,103.74200092091985');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J90','BLK 274A TOH GUAN ROAD',18444.8766,35967.1503,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3415471370568683,103.74746010063718');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J91','BLK 287E JURONG EAST STREET 21',18071.4794,35523.767,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3375372199171942,103.7441050519854');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J92','BLK 285E TOH GUAN ROAD',18377.6747,35526.0278,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3375577648770767,103.74685639183146');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J93','BLK 286E TOH GUAN ROAD',18186.6838,35712.1634,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3392410457426782,103.74514016877326');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J94','BLK 288F JURONG EAST STREET 21',17966.9948,35762.0649,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3396922643624247,103.74316611919521');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J95','BLK 282A TOH GUAN ROAD',18403.3359,35807.1678,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3401003005523222,103.7470868836085');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J96','BLK 267A TOH GUAN ROAD',18166.4546,35964.0009,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3415185653945154,103.7449583160272');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J97','BLK 273A TOH GUAN ROAD',18276.4189,36061.6102,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3424013439260631,103.74594637866043');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J98M','BLK 647A JURONG WEST STREET 61',12813.2745,35771.8721,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2.15,'N','1.3397788016970964,103.69685697580206');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('J99M','BLK 640A JURONG WEST STREET 61',12722.6845,35766.8461,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2.15,'N','1.3397333027042408,103.69604297580922');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('KAB','BLK 334 KRETA AYER BASEMENT CAR PARK',29009.336,29350.1611,'BASEMENT CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',1,2.1,'Y','1.2817069215968342,103.84238785277859');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('KAM','BLK 335 KRETA AYER MSCP',29110.783,29377.6082,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',2,1.9,'N','1.281955140134134,103.8432993941714');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('KAML','KAM KRETA AYER (LOADING BAY)',29106.1357,29419.0762,'SURFACE CAR PARK','ELECTRONIC PARKING','NO','NO','NO',0,1.9,'N','1.2823301623409735,103.84325763782813');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('KAS','BLK 333 KRETA AYER CAR PARK',29052.1921,29224.6796,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,0,'N','1.2805721095242562,103.84277292721802');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('KBM','BLK 65A KALLANG BAHRU',31984.8599,33610.8985,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3202392875401796,103.86912462402037');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('KB1','BLK 54/56/58 GEYLANG BAHRU ROAD',31959.8887,33979.5898,'SURFACE CAR PARK','ELECTRONIC PARKING','NO','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3235736038960753,103.86890029223395');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('KB10','BLK 30 BENDEMEER ROAD',31369.1973,33463.1641,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,4.5,'N','1.3189033039657896,103.86359255881808');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('KB11','BLK 34 WHAMPOA WEST',31383.6001,33648.8612,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3205826810878298,103.86372199579338');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('KB12','BLK 22/24 SERANGOON ROAD',31145.9587,33485.5967,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3191062001768292,103.86158664703446');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('KB14','BLK 66/71 KALLANG BAHRU',32089.1664,33646.109,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3205577050364643,103.87006187688044');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('KB17','BLK 23 BENDEMEER ROAD',31293.2559,33326.1406,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3176641202622537,103.86291017151486');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('KB18','BLK 45-48 BENDEMEER ROAD',31607.4592,33883.3513,'SURFACE CAR PARK','ELECTRONIC PARKING','NO','NO','NO',0,4.5,'N','1.3227033007435507,103.86573351416885');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('KB20','BLK 49A WHAMPOA SOUTH',31686.3712,33999.0332,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2,'N','1.3237494773420007,103.86644259415297');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('KB3','BLK 64/65/67 KALLANG BAHRU',32043.8984,33676,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3208280346346697,103.86965512421548');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('KB4','BLK 72/93/97 GEYLANG BAHRU',32158.2889,33930.5369,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3231299605395095,103.87068301702237');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('KB6','BLK 74/92 GEYLANG BAHRU',32530.8352,33607.979,'SURFACE CAR PARK','COUPON PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3202128086841072,103.87403049568998');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('KB7','BLK 69 GEYLANG BAHRU',32135.5156,33759.7891,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3215857812299283,103.87047836388133');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('KEM1','BLK 671 KLANG LANE',30136.2998,32358.8836,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',10,2.15,'N','1.3089166922000102,103.8525142617092');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('KE1','BLK 101/121 BEDOK RESERVOIR ROAD',36412.1149,34662.9517,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.329752779624782,103.90890609088413');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('KE2','BLK 122/126 BEDOK RESERVOIR ROAD',36595.65,34969.9073,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3325287234372658,103.91055534077998');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('KE3','BLK 127/135, 141/151 BEDOK RESERVOIR ROAD',36751.9219,35122.572,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3339093228742824,103.91195957483191');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('KE3M','BLK 145A BEDOK RESERVOIR ROAD',36690.7665,35134.9344,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',4,2.15,'N','1.33402114153984,103.91141006264941');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('KE4','BLK 136/140 BEDOK RESERVOIR ROAD',36895.1004,35095.7928,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3336670998148807,103.91324610643962');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('KJML','BLK 14A FARRER PARK ROAD',30035.265,32724.2432,'SURFACE CAR PARK','ELECTRONIC PARKING','NO','NO','NO',0,0,'N','1.31222088220004,103.851606439352');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('KJM1','BLK 37A CAMBRIDGE ROAD',29722.4759,33152.4737,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3160936666077356,103.84879589885311');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('KJM2','BLK 14A FARRER PARK RD',30084.3192,32664.3631,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',12,2.15,'N','1.3116793444533785,103.85204721150244');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('KJ1','BLK 9/10 GLOUCESTER ROAD',30083.6504,32880.4805,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,0,'N','1.3136338338943585,103.85204121653125');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('KJ2','BLK 49/50 DORSET ROAD',29932.1543,32838.1094,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,0,'N','1.3132506545207223,103.85067994596479');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('KJ3','BLK 48/48A DURHAM ROAD',29848.7578,32968.1406,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3144266158666138,103.84993059473969');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('KJ4','BLK 51/54 KENT ROAD',30020.0977,33207.0158,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3165869079469947,103.8514701851814');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('KLM','BLK 31 KELANTAN LANE MSCP',30613.3563,32065.8984,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',7,1.8,'N','1.306267000879174,103.85680081928476');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('KM1','BLK 56A CASSIA CRESCENT',33634.3718,32491.1189,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2,'N','1.3101121410128782,103.88394614159617');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('KM2','BLK 93A JALAN DUA',34056.2683,32342.8113,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',9,2,'N','1.3087708200412935,103.88773705618027');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('KM3','BLK 11A PINE CLOSE',33523.1191,32313.2942,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3085039778619192,103.88294645078568');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('KM4','BLK 49A JALAN TIGA',33792.0373,32312.0363,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',14,2.15,'N','1.308492552601751,103.88536280878151');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('KTM','BLK 125A KIM TIAN ROAD',27480.5391,29500.8137,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',10,1.9,'N','1.283069382670319,103.82865102020018');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('KTM2','BLK 120B KIM TIAN PLACE',27349.7876,29542.5114,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',14,2.15,'N','1.2834464796052978,103.82747616603861');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('KTM3','BLK 131A KIM TIAN ROAD',27480.2057,29232.1227,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',13,2.15,'N','1.2806394354926462,103.82864802888751');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('KTM4','BLK 119A KIM TIAN ROAD',27329.8822,29325.2282,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',5,2.15,'N','1.281481446142533,103.82729731282123');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('KTM5','BLK 126 KIM TIAN ROAD',27570.7265,29441.0716,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',10,2.15,'N','1.2825290974366843,103.82946139003299');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('KTM6','BLK 127 KIM TIAN ROAD',27546.4706,29366.694,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',6,2.15,'N','1.2818564521671447,103.82924344240905');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('KU1','BLK 301/305-306/311-318 UBI AVENUE 1',35764.1553,34634.4679,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.329495354874527,103.9030838107627');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('KU2','BLK 319-330 UBI AVENUE 1',35904.5382,34433.0259,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3276735499716716,103.9043451761408');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('KU3','BLK 331-341 UBI AVENUE 1',35693.8016,34294.5677,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,4.5,'N','1.3264214379334058,103.9024515587614');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('KU4','BLK 342-352 UBI AVENUE 1',35426.6861,34198.7233,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,4.5,'N','1.3255547219734685,103.90005135904428');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('KU5','BLK 3004-3007,3014,3015 UBI ROAD 1',34682.004,34739.3755,'SURFACE CAR PARK','COUPON PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,0,'N','1.3304443586910288,103.89336010931369');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('KU9','BLK 302,304 UBI AVENUE 1',35542.2415,34680.104,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.329908127187142,103.90108980467569');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('K10','BLK 28,30,32,34,36 CASSIA CRESCENT',33686.7144,32414.074,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','NO','NO',0,0,'N','1.3094153647830145,103.88441645100211');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('K19','BLK 62 DAKOTA CRESCENT',34230.6149,32242.3548,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,0,'N','1.3078622926222216,103.88930362342026');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('K2','BLK 9,10,12 PINE CLOSE',33456.8846,32339.0013,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','NO','NO',0,0,'N','1.308736475497943,103.88235130672611');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('K2T','BLK 21 JALAN EMPAT',33589.582,32206.4841,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,0,'N','1.3075380133900338,103.88354363243695');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('K21','BLK 58 DAKOTA CRESCENT',34152.4219,32154.25,'SURFACE CAR PARK','COUPON PARKING','7AM-10.30PM','NO','NO',0,0,'N','1.3070655199100667,103.8886010048468');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('K22','BLK 60 DAKOTA CRESCENT',34127.5,32207.5039,'SURFACE CAR PARK','COUPON PARKING','NO','NO','NO',0,4.5,'N','1.307547134135114,103.8883770803254');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('K3T','BLK 17 JALAN EMPAT',33624.4511,32211.1481,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,0,'N','1.307580186619789,103.88385694864957');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('K52','BLK 52 CASSIA CRESCENT',33696.3242,32544.5075,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,0,'N','1.3105949571081403,103.88450282359662');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('K7','BLK 51 OLD AIRPORT ROAD',33864.8318,32356.4852,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,4.5,'N','1.3088945188723258,103.88601691043654');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('K9','BLK 42 CASSIA CRESCENT',33891.3203,32539.3633,'SURFACE CAR PARK','COUPON PARKING','7AM-7PM','NO','NO',0,0,'N','1.3105483981592922,103.88625495695864');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('LBM','BLK 64 LENGKOK BAHRU',25985.8189,30193.5347,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',8,2.15,'N','1.2893340477316115,103.81522033138347');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('LT1','BLK 110,113-116 LENGKONG TIGA',36701.4493,33951.4516,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,4.5,'N','1.3233181490784767,103.91150571719866');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('LT2','BLK 111-112 LENGKONG TIGA',36631.1094,34016.6914,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','NO','NO',0,4.5,'N','1.3239081741740912,103.91087369459761');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('LT3','BLK 101-109 LENGKONG TIGA',36588.6943,34141.3917,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','NO','NO',0,4.5,'N','1.3250359305098425,103.91049260744198');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('L1','BLK 415-420 LOR LEW LIAN',32678.1348,36847.0548,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','NO','NO',0,5.4,'N','1.3495058318348205,103.87535455642113');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('MLM','BLK 157A MEI LING STREET',24676.3894,30639.2696,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',11,2.15,'N','1.2933650054100585,103.80345452106445');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('MLM1','BLK 161A MEI LING ST',24684.8066,30491.8693,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',7,2.15,'N','1.2920319699769376,103.80353016873036');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('MM1','BLK 28A BALAM ROAD',33981.2699,34740.5471,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',10,2,'N','1.330455100290608,103.88706362505674');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('MM2','BLK 52A PIPIT ROAD',33873.4028,34064.3335,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.324339687506112,103.88609424966474');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('MM3','BLK 66A CIRCUIT ROAD',34087.5573,34277.3707,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',11,2.15,'N','1.3262662777141818,103.88801858425032');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('MM4','BLK 31A CIRCUIT ROAD',33805.7605,34616.0975,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',11,2.15,'N','1.3293296567041755,103.88548655203162');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('MM5','BLK 17 CIRCUIT ROAD',34149.4724,34667.1985,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',15,2.15,'N','1.329791728252547,103.88857500311558');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('MM6','BLK 82 CIRCUIT ROAD',34318.7769,34060.4025,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',5,2.15,'N','1.3243040479763968,103.89009617246221');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('MNM','BLK 113 MCNAIR ROAD',30951.0578,33699.6625,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3210421547957307,103.85983538215343');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('MNRM','BLK 108A MCNAIR ROAD',30906.0026,33644.1601,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3205402150734071,103.85943053232883');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('MN1','BLKS 108/112 MCNAIR ROAD',30880.3705,33808.8344,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,3.5,'N','1.3220294734974907,103.8592002299241');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('MN2','BLKS 119/124 MCNAIR ROAD',30565.2223,33368.7671,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3180496887521327,103.85636842037391');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('MP1','BLK 1 TO 4 MARINE TERRACE',37371.0903,31905.8597,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','NO','NO',0,4.5,'N','1.304818359952011,103.91752217325197');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('MP1M','BLK 65A MARINE DRIVE',36529.5332,31693.5008,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',5,2,'N','1.3028981058096252,103.90996033896582');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('MP12','BLK 72 TO 76 MARINE DRIVE',36272.3984,31724.8516,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,4.5,'N','1.303181700812536,103.90764987473207');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('MP13','BLK 78 & 79 MARINE DRIVE',36406.0703,31559.5098,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,0,'N','1.301686373156581,103.90885093288705');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('MP14','BLK 81/82 MARINE PARADE ROAD',36194.5872,31654.4656,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,0,'N','1.3025451758066573,103.90695068730813');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('MP15','BLK 83/87 MARINE PARADE ROAD',36086.4038,31669.644,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,4.5,'N','1.3026824721868302,103.9059786145158');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('MP16','BLK 84 TO 86 MARINE PARADE ROAD',36161.9939,31592.0346,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,0,'N','1.3019805808843232,103.9066578054694');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('MP17','BLK 51/59 MARINE TERRACE',37078.7559,32050.6377,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3061277669131703,103.91489545704646');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('MP19','BLK 89 MARINE PARADE CTRL',36133.3286,31515.2207,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',10,1.9,'N','1.3012859111117976,103.90640021486205');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('MP2','BLK 5 TO 8 MARINE TERRACE',37274.8789,31840.2031,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3042246143882668,103.91665765027031');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('MP2M','BLK 35A MARINE CRESCENT',36854.4147,31775.1611,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',6,2.15,'N','1.303636521036433,103.91287956925623');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('MP20','BLK 86 MARINE PARADE ROAD',36109.3594,31519.7479,'SURFACE CAR PARK','COUPON PARKING','WHOLE DAY','NO','YES',0,0,'N','1.301326859749957,103.90618484205207');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('MP3M','BLK 12A MARINE TERRACE',37128.3266,31854.8695,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',4,2.05,'N','1.304357295530727,103.9153408153675');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('MP4M','BLK 16A MARINE TERRACE',37001.0531,31814.983,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',4,2.05,'N','1.3039966136773664,103.91419719336623');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('MP5','BLK 52/57 MARINE TERRACE',37220.0664,32048.6387,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,0,'N','1.3061096468902538,103.91616519665877');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('MP5M','BLK 47A MARINE CRESCENT',36809.7582,31975.4666,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','NO','NO',2,2.15,'N','1.3054480243950703,103.91247836691679');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('MP5S','BLK 45 MARINE CRESCENT',36819.8751,31889.6622,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','NO','NO',0,4.5,'N','1.3046720374995573,103.91256924764112');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('MP6','BLK 50/50A/53 MARINE TERRACE',37244.1328,31980.8496,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3054965796249172,103.91638142426896');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('MP6M','BLK 77A MARINE DRIVE',36343.2232,31627.1688,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',11,2.15,'N','1.3022982737557676,103.90828624158996');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('MP6S','BLK 77 MARINE DRIVE',36348.9991,31605.5773,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,0,'N','1.3021030064476682,103.90833813488189');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('MP7','BLK 54/55/56/58/59 MARINE TERRACE',37055.7578,31990.209,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,0,'N','1.3055812783399663,103.91468879090614');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('MR3','BLK 1/2 MAUDE ROAD',30868.3965,32223.6387,'SURFACE CAR PARK','COUPON PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,0,'N','1.307693525819981,103.85909249026979');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('MR4','BLK 7 KING GEORGE AVENUE',30966.4004,32248.0234,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,0,'N','1.3079140431771623,103.8599731043321');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('MR5','BLK 804/805, 809 MAUDE ROAD',31057.5078,32274.7238,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,2.5,'N','1.3081555032749408,103.86079175042123');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('MR6','BLK 8 FRENCH ROAD',31029.1022,32165.4648,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,0,'N','1.3071674063050955,103.86053650188931');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('MR7','BLK 801/802 FRENCH ROAD',31013.0397,32209.1946,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,5.4,'N','1.3075628847261718,103.8603921769386');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('M1','BLK 85 TO 94/92A PIPIT ROAD',33911.4824,33924.4674,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3230747811611212,103.88643638826372');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('M16','BLK 37 CIRCUIT ROAD',33937.7242,34516.7499,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3284311670898423,103.88667229933561');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('M20','BLK 65 & 80 CIRCUIT RD',34003.7503,34423.7894,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,0,'N','1.3275904526526723,103.88726556178919');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('M25','BLK 53 TO 56/68/70/71/72 PIPIT RD/CIRCUIT RD',34105.2715,34051.7061,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,4.5,'N','1.324225444310148,103.88817771100906');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('M28','BLK 82A/83 MACPHERSON LANE',33769.1354,34814.6793,'SURFACE CAR PARK','COUPON PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.331125566404268,103.88515749278582');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('M29','BLK 12 TO 14 MERPATI RD',33423.9102,34401.875,'SURFACE CAR PARK','COUPON PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3273923754858081,103.88205537855639');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('M3','BLK 19 TO 21/23/24/30/32 BALAM RD',33830.3378,34765.5068,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,4.5,'N','1.3306808562275345,103.8857074211042');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('M32','BLK 120 TO 124 PAYA LEBAR WAY',33506.0078,33840.2109,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.32231287123776,103.88279296947921');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('M33','BLK 125 TO 126 ALJUNIED ROAD',33436.9727,33943.3672,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3232457923541547,103.88217267100772');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('M34','BLK 81/82 MACPHERSON LANE',33822.8767,34967.5382,'SURFACE CAR PARK','COUPON PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3325079573001068,103.885640417485');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('M35','BLK 41 TO 42 CIRCUIT ROAD',33853.4512,34389.6627,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-7PM','NO','NO',0,0,'N','1.3272818522606584,103.8859150359738');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('M36','BLK 43 CIRCUIT ROAD',33802.3661,34325.7124,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-7PM','NO','NO',0,0,'N','1.3267035184005465,103.88545599646352');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('M37','BLK 38 TO 40 CIRCUIT ROAD',33818.9546,34433.4006,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-7PM','NO','NO',0,0,'N','1.327677408792968,103.88560507356979');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('M38','BLK 63 TO 64 CIRCUIT ROAD',34027.245,34375.424,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','NO','NO',0,0,'N','1.3271530486482286,103.88747666495252');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('M4','BLK 22/34/36 CIRCUIT RD',34047.6106,34582.1714,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3290227940584043,103.88765970175464');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('NBRM','BLK 13 NORTH BRIDGE ROAD MSCP',31304.4327,31815.6323,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,1.9,'N','1.3040036166790787,103.86301043995866');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('NTL','BLK 601 - 605A/D TAMPINES AVE 9/ ST 61',39322.4773,38244.2282,'SURFACE CAR PARK','ELECTRONIC PARKING','NO','NO','NO',0,0,'N','1.3621395753090637,103.93505862697701');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('NT1','BLK 601 TAMPINES AVE 9',39457.9515,38139.8942,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',2,2.15,'N','1.3611959653243388,103.93627591213483');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('NT2','BLK 605 TAMPINES ST 61',39463.5572,38242.0507,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',2,2.15,'N','1.3621198286235536,103.93632632224283');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('NT3','BLK 609 TAMPINES NTH DR 1',39454.1027,38455.323,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',4,2.15,'N','1.3640485877681485,103.93624144919546');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('NT4','613 TAMPINES NTH DR 1',39451.0111,38606.4942,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',8,2.15,'N','1.3654157251482655,103.93621372719731');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('NT5','BLK 618 TAMPINES STREET 61',39861.432,38191.3771,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',1,2.15,'N','1.361661399027134,103.9399014697321');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PDC4','BLK 475 CHOA CHU KANG AVE 3',17475.2563,39985.5474,'SURFACE/MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',4,2.15,'N','1.3778877152433882,103.7387460775052');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PDC5','BLK 533A CHOA CHU KANG ST 51',17989.9222,41499.0296,'SURFACE/MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',8,2,'N','1.3915752693009902,103.74337020617511');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PDJ3','BLK 399 YUNG SHENG RD',15435.0187,35211.8516,'BASEMENT CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',1,2.1,'Y','1.3347153913634864,103.72041507700847');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PDJ7','BLK 762A JURONG WEST ST 75',12930.5286,36787.2543,'SURFACE/MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',8,2,'N','1.3489615906402481,103.69791006448118');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PDL1','BLK 168 PUNGGOL FIELD',36861.9823,41783.2542,'BASEMENT CAR PARK','ELECTRONIC PARKING','NO','NO','NO',2,2.15,'Y','1.3941460662993008,103.91295050922298');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PDP4','BLK 446A FAJAR ROAD',21106.05,40635.5878,'SURFACE/MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',8,2.15,'N','1.3837675231487212,103.77137123961275');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PDP5','BLK 524A JELAPANG ROAD',20516.3308,40817.8945,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',1,2.15,'N','1.3854160932518766,103.76607212381198');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PDQ5','BLK 57 DAWSON RD',25514.1791,30563.4425,'SURFACE/MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',3,2.15,'N','1.2926793297693575,103.81098242424284');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PDR2','BLK 258 PASIR RIS ST 21',42604.5156,38773.6442,'SURFACE/MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',3,1.9,'N','1.3669259778172476,103.96455015442625');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PDR6','BLK 624A ELIAS RD',40065.8952,39988.2066,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',9,2,'N','1.3779111716188173,103.94173943625098');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PDR7','BLK 734 PASIR RIS ST 72',39453.4352,40190.3477,'SURFACE/MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',8,2,'N','1.3797395060386952,103.9362361216368');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PDS1','BLK 118 RIVERVALE DR',35624.873,40823.859,'SURFACE/MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',12,2.15,'N','1.3854699982857868,103.90183385802828');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PDT8','BLK 866A TAMPINES ST 83',39261.5396,37495.72,'BASEMENT CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',1,2.15,'Y','1.3553703676578666,103.93451077983565');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PDW5','BLK 548 WOODLANDS DR 44',23640.69,45832.6288,'SURFACE/MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',6,2.15,'N','1.4307681685236922,103.7941461022236');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PDW7','BLK 768 WOODLANDS AVE 6',24076.3392,47457.4236,'SURFACE/MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',2,2.15,'N','1.44546228493892,103.79806059150005');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PDW8','BLK 888A WOODLANDS DR 50',23752.5835,46647.3671,'SURFACE/MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',7,2.15,'N','1.4381363820727706,103.7951514476537');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PD8W','BLK 883A WOODLANDS ST 82',23295.7544,47198.0451,'SURFACE/MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',8,2.15,'N','1.443116440034946,103.79104630681421');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PLB1','BLK 440 PASIR RIS DRIVE 4',41971.3984,39012.3008,'SURFACE CAR PARK','COUPON PARKING','NO','NO','NO',0,0,'N','1.3690846037201394,103.95886128429358');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PL10','BLK 174 PUNGGOL FIELD',36567.6957,42059.8507,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',7,2.15,'N','1.3966475919363972,103.91030619395818');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PL11','BLK 175 PUNGGOL FIELD',36383.4393,42222.0385,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',7,2.15,'N','1.3981144128367327,103.90865055016069');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PL12','BLK 137 EDGEDALE PLAINS',36467.5455,41586.9263,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',4,2.15,'N','1.39237066672848,103.90940612733527');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PL13','BLK 131 EDGEDALE PLAINS',36576.967,41721.609,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',4,2.15,'N','1.3935886554890775,103.91038940445094');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PL14','BLK 292 PUNGGOL CENTRAL',35982.6704,42695.5596,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',9,2.15,'N','1.4023968775457822,103.90504945007196');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PL15','BLK 171 EDGEDALE PLAINS',36821.298,41862.4746,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2.15,'N','1.3948625188764743,103.91258495275933');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PL16','BLK 180 EDGEFIELD PLAINS',36463.3164,42276.7143,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',8,2.15,'N','1.3986088574081823,103.90936832589145');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PL17','BLK 642 PUNGGOL DRIVE',37244.6093,42288.7308,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2.15,'N','1.3987172907709295,103.9163888739785');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PL18','BLK 162 PUNGGOL CENTRAL',37013.9934,41998.5248,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2.15,'N','1.396092847476143,103.91431651502327');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PL19','BLK 186-188,190-192 PUNGGOL CENTRAL',36545.1733,42395.6863,'BASEMENT CAR PARK','ELECTRONIC PARKING','7AM-7PM','NO','NO',2,2.15,'Y','1.3996847723542245,103.91010391091997');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PL20','BLK 638 PUNGGOL DRIVE',37111.8432,42381.4517,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2.15,'N','1.3995558665879637,103.91519589302517');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PL21','BLK 166 PUNGGOL CENTRAL',37141.8926,41874.4571,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2.15,'N','1.3949707847951467,103.9154657518681');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PL22','BLK 644 PUNGGOL CENTRAL',37191.4597,42180.6537,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',4,2.1,'N','1.3977398982918714,103.91591124799342');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PL23','BLK 201 PUNGGOL FIELD',35831.2383,42404.7448,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',8,2.15,'N','1.3997668965998609,103.90368863010565');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PL24','BLK 178 & 193 EDGEFIELD PLAINS',36348.4338,42380.9942,'BASEMENT CAR PARK','ELECTRONIC PARKING','7AM-7PM','NO','NO',2,2.15,'Y','1.3995519599597015,103.90833604330294');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PL25','BLK 172 EDGEDALE PLAINS',36731.4595,41935.1533,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',8,2.15,'N','1.3955198255395462,103.91177770471042');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PL26','BLK 650 PUNGGOL CENTRAL',37123.7973,42130.2229,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',4,2.15,'N','1.3972838421569989,103.91530323143354');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PL27','BLK 204 PUNGGOL FIELD',35762.7151,42260.5799,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',8,2.15,'N','1.3984631405322812,103.90307285517704');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PL28','BLK 194 PUNGGOL ROAD',36145.8836,42652.6976,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2.15,'N','1.4020092036707752,103.90651604233213');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PL29','BLK 633 PUNGGOL DRIVE',36897.0646,42490.1374,'BASEMENT CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','NO','NO',1,2.15,'Y','1.400538847013656,103.91326596736563');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PL30','BLK 170D PUNGGOL EAST',36989.2194,41806.2447,'BASEMENT CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','NO','NO',1,2.15,'Y','1.394353944737511,103.91409384167919');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PL31','BLK 301 PUNGGOL CENTRAL',36110.4866,42837.2882,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','NO','NO','YES',8,2.15,'N','1.4036785832909147,103.90619802299027');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PL32','BLK 302 PUNGGOL PLACE',35933.3863,42966.5081,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','NO','NO','YES',10,2.15,'N','1.4048472500172433,103.90460666624088');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PL33','BLK 621A - 621B EDGEFIELD WALK',36521.4363,42569.3563,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','NO','NO',0,4.5,'N','1.4012553870089186,103.90989066575952');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PL34','BLK 603 PUNGGOL ROAD',36309.071,42857.6068,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2.15,'N','1.403862280610026,103.90798247324133');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PL35','BLK 602 PUNGGOL CENTRAL',36232.401,42775.4525,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2.15,'N','1.4031193293259538,103.90729350674667');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PL36','BLK 305 PUNGGOL ROAD',36113.2644,43096.1637,'COVERED CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',1,2.15,'N','1.4060197574757536,103.9062230563652');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PL37','BLK 614 EDGEFIELD PLAINS',36495.4409,42788.2417,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',13,2.15,'N','1.4032349137543931,103.90965714004724');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PL38','BLK 612 PUNGGOL DRIVE',36381.5675,42939.0974,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.4045992306191062,103.90863393763146');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PL39','BLK 267 PUNGGOL FIELD',35192.9049,42872.8244,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',3,2.15,'N','1.4040002035818009,103.89795280345768');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PL40','BLK 270 PUNGGOL FIELD',35326.1743,42841.9622,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','NO','NO',2,2.15,'N','1.4037210635186192,103.89915033137795');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PL41','BLK 273 PUNGGOL PLACE',35636.9282,42723.6586,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',2,2.15,'N','1.4026510883226657,103.90194268043491');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PL42','BLK 616 PUNGGOL DRIVE',36722.4823,42665.6779,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','NO','NO',2,2.15,'N','1.402126423994564,103.91169725663117');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PL43','BLK 288 PUNGGOL PLACE',35765.2615,42620.0879,'COVERED CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',1,2.15,'N','1.4017143985503453,103.9030958327371');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PL44','BLK 206A PUNGGOL PLACE',35568.6186,42304.0762,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','NO','NO',0,3.8,'N','1.398856556652632,103.90132875322426');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PL45','BLK 169 PUNGGOL FIELD',37034.4487,41726.1275,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','NO','NO',2,2.15,'N','1.393629380207694,103.91450023771422');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PL46','BLK 624 PUNGGOL CENTRAL',36714.9868,42459.2349,'COVERED CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','NO','NO',1,2.15,'N','1.4002594317477919,103.91162984145231');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PL47','BLK 207 PUNGGOL PLACE',35522.7156,42499.8392,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','NO','NO',7,2.15,'N','1.400626977614167,103.90091632843101');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PL48','BLK 271 PUNGGOL WALK',35463.4411,42762.8004,'COVERED CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','NO','NO',1,2.15,'N','1.403005117906795,103.90038376648269');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PL49','BLK 210 PUNGGOL PLACE',35463.2889,42357.9568,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','NO','NO',11,2.15,'N','1.3993438605048472,103.90038229474283');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PL50','BLK 211 PUNGGOL WALK',35358.2193,42587.4444,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','NO','NO',6,2.15,'N','1.4014192894388875,103.89943821756714');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PL51','BLK 213 PUNGGOL WALK',35273.4071,42431.6579,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',11,2.15,'N','1.400010434777652,103.89867607165827');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PL52','BLK 312 SUMANG LINK',35583.2467,43557.8383,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',13,2.15,'N','1.4101951180886203,103.90146052684818');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PL53','BLK 266 PUNGGOL WAY',35221.6263,43013.9553,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',2,2.15,'N','1.405276532646886,103.89821092418207');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PL54','BLK 259 PUNGGOL FIELD',34902.6149,42928.77,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',14,2.15,'N','1.404506226244788,103.89534432107786');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PL55','BLK 261 PUNGGOL WAY',35069.2354,43028.1349,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',11,2.15,'N','1.4054048056345319,103.89684156866582');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PL56','BLK 672 EDGEFIELD PLAINS',36726.0925,43212.3119,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',16,2.15,'N','1.4070699794626313,103.91172986197323');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PL57','BLK 665 PUNGGOL DRIVE',37055.2239,42642.9595,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',2,2.15,'N','1.4019208645334207,103.91468720451994');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PL58','663  PUNGGOL DRIVE',37289.3261,42421.1514,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',13,2.15,'N','1.3999148394641896,103.91679073265178');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PL59','BLK 308 PUNGGOL WALK',35282.797,43327.1927,'BASEMENT CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',1,2.15,'Y','1.408109321653477,103.89876067269127');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PL60','BLK 670 EDGEFIELD PLAINS',36896.1695,43074.4327,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',14,2.15,'N','1.4058229986447526,103.91325810351456');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PL61','BLK 678 PUNGGOL DRIVE',36410.0435,43106.6938,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',2,2.15,'N','1.4061149025133133,103.90888986674689');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PL62','BLK 256 SUMANG WALK',34923.1009,43042.4085,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.4055339264168498,103.89552843195224');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PL63','BLK 677 PUNGGOL DRIVE',36486.8089,43065.2274,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',2,2.15,'N','1.4057398730818174,103.9095796556182');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PL64','BLK 676 PUNGGOL DRIVE',36557.4238,43015.7992,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',3,2.15,'N','1.4052928416984594,103.91021417456238');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PL65','BLK 310 PUNGGOL WALK',35389.8621,43509.9902,'BASEMENT CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,2.15,'Y','1.409762447924623,103.89972278958646');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PL66','BLK 121 EDGEDALE PLAINS',36352.1816,41721.0087,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',11,2.15,'N','1.3935832922158469,103.9083695310196');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PL67','BLK 314 PUNGGOL WAY',35143.9937,43367.4988,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',2,2.15,'N','1.4084738701672708,103.89751341807985');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PL68','BLK 217 SUMANG WALK',34935.4135,42745.609,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',16,2.15,'N','1.402849777146735,103.8956389998498');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PL69','BLK 661 EDGEDALE PLAINS',37380.9995,42710.8525,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',13,2.15,'N','1.4025347595532838,103.91761458579194');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PL70','BLK 226 SUMANG LANE',34673.3293,42770.8483,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',2,2.15,'N','1.403078094080514,103.89328396343744');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PL71','BLK 682 EDGEDALE PLAINS EDGEDALE PLAINS',37178.9151,42875.7489,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',16,2.15,'N','1.4040260868198657,103.91579874451504');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PL72','BLK 222 SUMANG LANE SUMANG LANE',34784.0419,42552.2276,'MULTI-STOREY CAR PARK','COUPON PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',13,2.15,'N','1.401100942346659,103.89427875623967');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PL74','BLK 233 SUMANG LANE',34486.264,42569.8371,'MULTI-STOREY CAR PARK','COUPON PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',7,2.15,'N','1.4012602647548869,103.89160298259335');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PL75','BLK 325 SUMANG WALK',35281.7517,43917.728,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',15,2.15,'N','1.413449906911528,103.8987514289573');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PL76','BLK 326 SUMANG WALK SUMANG WALK',35345.9447,43901.2419,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',6,2.15,'N','1.413300796243428,103.89932825423637');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PL77','BLK 659 PUNGGOL EAST ROAD',37596.6187,42542.5155,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',14,2.15,'N','1.401012310975492,103.91955204475866');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PL78','BLK 322 SUMANG WALK',35143.0392,43671.1572,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',13,2.15,'N','1.4112200458616646,103.89750491628354');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PL80','BLK 407A-407B NORTHSHORE WALK',35655.2525,44286.5897,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',2,2.15,'N','1.4167856591181158,103.9021077540444');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PL81','BLK 421A NORTHSHORE DRIVE',35919.5379,44619.0472,'BASEMENT CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',4,2.15,'Y','1.4197922102831946,103.90448268138053');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PM1','473A PASIR RIS DR 6',41720.207,39587.085,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.374282852405605,103.95660442487535');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PM10','BLK 204A PASIR RIS STREET 21',42373.461,38753.7772,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',10,1.9,'N','1.3667464214739593,103.96247396456343');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PM11','BLK 269A PASIR RIS STREET 21',42482.8751,38537.8136,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',8,1.9,'N','1.3647932754078957,103.96345701840376');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PM12','BLK 272A PASIR RIS STREET 21',42657.807,38550.2316,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',6,1.9,'N','1.3649054929788302,103.96502890331404');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PM13','BLK 199A PASIR RIS STREET 12',42053.3726,38723.5879,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,1.9,'N','1.3664735547775337,103.95959774167476');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PM14','BLK 180A PASIR RIS STREET 11',42109.8791,38528.4122,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,1.9,'N','1.3647084328267176,103.96010539790755');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PM15','BLK 158A PASIR RIS STREET 13',42284.7957,38467.7932,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2,'N','1.3641601337238647,103.96167711032825');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PM16','BLK 149A PASIR RIS STREET 13',42400.9355,38268.6092,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2,'N','1.3623587330477753,103.96272060688607');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PM17','BLK 142A PASIR RIS STREET 11',42071.2657,38321.6853,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2,'N','1.362838891434807,103.95975833337505');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PM18','BLK 135A PASIR RIS STREET 11',41750.9103,38533.7141,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',8,2,'N','1.3647565501015353,103.95687982769061');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PM19','BLK 108A PASIR RIS STREET 12',41766.7964,38887.5806,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2,'N','1.367956777555038,103.95702273852463');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PM2','BLK 220A PASIR RIS STREET 21',42210.8365,39121.6128,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,1.9,'N','1.37007306561966,103.96101285046079');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PM20','BLK 526 PASIR RIS STREET 51',40702.1342,38896.9108,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',13,2.15,'N','1.3680416334135912,103.94745603169594');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PM21','BLK 530 PASIR RIS DR 1',40920.1747,39245.8244,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','NO','NO','YES',15,2.15,'N','1.3711969823159367,103.94941542540188');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PM22','BLK 555A PASIR RIS STREET 51',41231.6084,38954.5238,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2,'N','1.3685624312364921,103.95221374215554');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PM23','BLK 564A PASIR RIS STREET 51',40930.0174,38967.7033,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',11,2,'N','1.3686817553022461,103.9495037477118');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PM24','BLK 561A PASIR RIS STREET 51',41131.632,38802.2291,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',8,2,'N','1.3671851799114267,103.9513153189911');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PM25','BLK 500A PASIR RIS STREET 52',40496.5258,39820.0373,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',13,1.9,'N','1.3763901312097686,103.94560888980419');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PM26','BLK 521A PASIR RIS STREET 52',40316.681,39541.0967,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',11,1.9,'N','1.373867572894938,103.94399274023216');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PM27','BLK 578A PASIR RIS STREET 53',40606.3885,39551.3513,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',11,2,'N','1.373960188897794,103.9465959696924');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PM28','BLK 586A PASIR RIS STREET 53',40736.5955,39633.1743,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2,'N','1.3747001092714635,103.9477660061047');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PM29','BLK 601A ELIAS ROAD',40247.7753,39924.3544,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,1.9,'N','1.3773336408343004,103.94337373293396');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PM3','BLK 225A PASIR RIS STREET 21',42201.9401,39312.6071,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',13,1.9,'N','1.3718003498167433,103.96093300168212');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PM30','BLK 614A ELIAS ROAD',40114.6224,39748.7266,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','NO','NO',10,1.9,'N','1.3757453839953446,103.94217718688328');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PM32','BLK 631A PASIR RIS DRIVE 3',39883.2972,40142.5172,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',11,2,'N','1.3793067735982882,103.94009872430271');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PM33','BLK 635A PASIR RIS DRIVE 1',39858.5997,39896.3925,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',11,2,'N','1.3770809237481751,103.93987670048551');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PM34','BLK 649A PASIR RIS DRIVE 10',39728.975,39998.0806,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',11,2,'N','1.3780006050848774,103.93871197024471');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PM35','BLK 700A PASIR RIS DRIVE 10',39721.1068,40304.2524,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,1.9,'N','1.3807695117170842,103.93864139053616');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PM36','BLK 710A PASIR RIS STREET 72',39546.2838,40486.3671,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2,'N','1.3824165586451849,103.93707054978773');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PM37','BLK 718A PASIR RIS STREET 72',39429.3197,40431.9844,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2,'N','1.3819247877443905,103.93601952013265');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PM38','BLK 736A PASIR RIS DRIVE 10',39565.4411,40102.7854,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2,'N','1.378947581223809,103.93724254160915');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PM4','BLK 231A PASIR RIS DRIVE 4',42258.6513,39567.5489,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,1.9,'N','1.3741059191478586,103.96144271358459');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PM40','BLK 744A PASIR RIS STREET 71',39358.5759,39992.2049,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',11,2,'N','1.3779476132601656,103.93538366563043');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PM41','BLK 747A PASIR RIS STREET 71',39214.3187,40090.5883,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',9,2,'N','1.3788374116684643,103.93408744824994');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PM43','BLK 757A PASIR RIS ST 71',39108.47,39913.5495,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',9,2,'N','1.3772363788570814,103.9331362544653');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PM44','BLK 762A PASIR RIS STREET 71',39126.6463,39773.0358,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',9,2,'N','1.3759656182674487,103.93329952863986');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PM45','BLK 773A PASIR RIS STREET 71',39416.5981,39622.2609,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2,'N','1.374601954887436,103.93590489391259');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PM46','BLK 782A PASIR RIS STREET 71',39692.8318,39469.9703,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',8,2,'N','1.373224586883508,103.9383869887287');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PM5','BLK 235A PASIR RIS STREET 21',42388.3371,39530.4506,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,1.9,'N','1.373770353071393,103.96260801282298');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PM6','BLK 245A PASIR RIS STREET 21',42477.8773,39204.2227,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,1.9,'N','1.3708200282252279,103.96341243438134');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PM7','BLK 257A PASIR RIS STREET 21',42459.8111,38843.4823,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',8,1.9,'N','1.367557638171991,103.96324992159083');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PM8','BLK 458A PASIR RIS DRIVE 4',42126.5924,39294.429,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2,'N','1.3716359902146535,103.96025594204701');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PM9','BLK 216A PASIR RIS STREET 21',42233.462,38924.6687,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',9,2,'N','1.3682919670590934,103.96121606162933');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PP1','BLK 101 TO 109 POTONG PASIR AVENUE 1',31994.78,35133.03,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.334004902068074,103.86921395965486');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PP2','BLK 143 TO 145 POTONG PASIR AVENUES 2/3',31643.1687,34986.5402,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3326801447688794,103.86605451410966');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PP3','BLK 134 TO 142 POTONG PASIR AVENUE 3',31619.7981,35088.4721,'SURFACE CAR PARK','ELECTRONIC PARKING','NO','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3336019833981587,103.86584452814058');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PP4','BLK 121 TO 133 POTONG PASIR AVENUE 1',31650.3687,35213.5248,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3347329118377271,103.86611923734695');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PP5','BLK 113 TO 120 POTONG PASIR AVENUE 1',31328.03,35388.25,'SURFACE CAR PARK','ELECTRONIC PARKING','NO','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3363131015185308,103.86322285845003');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PP6','BLK 146 POTONG PASIR AVENUE 2',31816.7963,34942.7097,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3322837359757773,103.86761465081429');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PP9T','BLK 145 POTONG PASIR AVENUES 2/3',31643.7896,34932.8598,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3321946782571832,103.86606008684078');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PRM','BLK 33 PARK CRESCENT MSCP',28996.2194,29764.092,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',7,2.15,'N','1.2854503678206215,103.8422700080622');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PRM1','BLK 441A PASIR RIS DRIVE 6',41857.2031,39071.4559,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',9,1.86,'N','1.3696196338881979,103.95783518955092');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PRS1','BLK 212A PASIR RIS STREET 21',42134.4478,38894.2762,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','NO','NO',0,0,'N','1.3680171563777719,103.9603263377034');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PR1','BLK 101/108 PASIR RIS STREET 12',41875.5357,38818.4836,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3673318395597107,103.9579998023344');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PR10','BLK 467/477 PASIR RIS DRIVE 6',41784.5801,39526.9469,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.373738956094068,103.95718283417963');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PR11','BLK 478/487 PASIR RIS DRIVE 4',42030.2409,39606.4261,'SURFACE CAR PARK','COUPON PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,4.5,'N','1.3744576196610265,103.9593903052974');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PR12','BLK 544/556 PASIR RIS STREET 51',41283.8272,38971.2519,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,4.5,'N','1.368713690421438,103.95268297102731');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PR13','BLK 537-543, 564-569 PASIR RIS STREET 51',40942.8203,39055.5703,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,4.5,'N','1.3694763858176826,103.94961882877014');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PR14','BLK 557-562 PASIR RIS ST 51',41151.375,38747.043,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,9.99,'N','1.3666860888089774,103.95149269876866');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PR2','BLK 109/129 PASIR RIS STREET 11',41590.9705,38812.1621,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,4.5,'N','1.3672748025475794,103.95544278951166');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PR3','BLK 531/536 PASIR RIS DR 1/PASIR RIS CENTRAL',41064.8727,39231.0631,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,4.5,'N','1.371063422875556,103.95071563026313');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PR4','BLK 406/411 PASIR RIS DRIVE 6',41488.2976,39437.995,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,0,'N','1.3729346460751715,103.95452048873425');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PR5','BLK 405/406, 412/429 PASIR RIS DRIVE 6',41554.7014,39169.7008,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,4.5,'N','1.370508264193332,103.95511705035094');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PR6','BLK 441/445 PASIR RIS DRIVE 6',41830.3635,39044.8529,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3693790590205024,103.95759400506248');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PR7','BLK 446/455 PASIR RIS DRIVE 6',41840.49,39225.13,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','NO','NO',0,0,'N','1.3710094121120635,103.95768508262735');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PR8','BLK 456/461 PASIR RIS DRIVE 4',42050.749,39253.7168,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,9.99,'N','1.371267840795115,103.95957441760477');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('PR9','BLK 463/466 PASIR RIS STREET 41',41926.2439,39467.9453,'SURFACE CAR PARK','COUPON PARKING','7AM-10.30PM','NO','NO',0,0,'N','1.3732053012591245,103.95845575439039');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('P1','BLK 196 PUNGGOL FIELD',36202.3912,42357.2043,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',7,2.15,'N','1.3993368546917737,103.90702372583512');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('P11','BLK 416 PANDAN GARDENS',18544.4873,33717.7282,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3212042144268707,103.74835585800444');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('P12','BLK 415 PANDAN GARDENS',18526.4824,33647.3125,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3205673948612133,103.74819409636538');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('P13','BLK 401/402 PANDAN GARDENS',18772.8516,33660.8789,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.320690159768277,103.75040784611822');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('P14','BLK 403/408 PANDAN GARDENS',18635.6875,33513.0954,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3193536177884062,103.74917540107666');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('P15','BLK 413 PANDAN GARDENS',18521.3692,33566.3085,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3198348225460326,103.74814817657088');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('P16','BLK 412/414 PANDAN GARDENS',18411.9297,33571.571,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3198823805928181,103.74716480513736');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('P17','BLK 409/411 PANDAN GARDENS',18436.3162,33454.2597,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3188214674823917,103.74738396670388');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('P2','BLK 199 PUNGGOL FIELD',36091.6693,42442.0964,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',7,2.15,'N','1.4001046189481594,103.90602882381486');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('P3','BLK 101 PUNGGOL FIELD',36063.3675,42259.892,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',8,2.15,'N','1.3984568370825283,103.90577445865665');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('P34L','PUNGGOL ROAD',36246.7526,42930.9252,'SURFACE CAR PARK','ELECTRONIC PARKING','NO','NO','NO',0,0,'N','1.4045253632063024,103.90742251192165');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('P35L','PUNGGOL CENTRAL',36269.0157,42678.4287,'SURFACE CAR PARK','ELECTRONIC PARKING','NO','NO','NO',0,0,'N','1.4022418712257199,103.90762249223624');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('P4','BLK 105 EDGEFIELD PLAINS',36046.5051,42123.9201,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',7,2.15,'N','1.3972271617557026,103.90562289882699');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('P40L','BLK 740 TO 745 PASIR RIS STREET 71',39419.6994,40009.1936,'SURFACE CAR PARK','ELECTRONIC PARKING','NO','NO','NO',0,4.2,'N','1.3781012289973844,103.93593291083194');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('P5','BLK 107 PUNGGOL FIELD',36271.1939,42085.2693,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',7,2.15,'N','1.3968775547129961,103.90764189630706');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('P5L','BLK 106A PUNGGOL FIELD',36283.2687,42152.2969,'SURFACE CAR PARK','ELECTRONIC PARKING','NO','NO','NO',0,0,'N','1.3974837242799738,103.90775041709206');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('P6','BLK 109 PUNGGOL FIELD',36473.7909,41918.4197,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',7,2.15,'N','1.3953685695565576,103.90946234340295');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('P6L','BLK 109B PUNGGOL FIELD',36543.1672,41943.8193,'SURFACE CAR PARK','ELECTRONIC PARKING','NO','NO','NO',0,0,'N','1.3955982538271956,103.91008575182225');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('P7','BLK 119 EDGEFIELD PLAINS',36140.7994,41924.977,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',8,2.15,'N','1.3954279668974037,103.90647015288728');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('P76L','BLK 327A SUMANG WALK',35336.0812,43792.9611,'SURFACE CAR PARK','ELECTRONIC PARKING','NO','NO','NO',0,0,'N','1.412321546901057,103.89923959459001');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('P77L','BLK 659 PUNGGOL EAST',37568.3243,42442.9721,'SURFACE CAR PARK','ELECTRONIC PARKING','NO','NO','NO',0,0,'N','1.4001120866706782,103.91929776382871');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('P8','BLK 126 EDGEDALE PLAINS',36635.3349,41792.3558,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2.15,'N','1.3942284462380639,103.91091390677072');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('P9','BLK 128 PUNGGOL FIELD WALK',36816.0197,41648.1136,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2.15,'N','1.3929239184124893,103.91253745829621');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Q14','BLK 49 STIRLING RD',24533.22,31110.95,'SURFACE CAR PARK','COUPON PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,0,'N','1.2976307008778873,103.80216803097211');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Q15','BLK 41/48 STIRLING RD',24487.19,31188.56,'SURFACE CAR PARK','COUPON PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.2983325731435038,103.80175442244355');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Q16','BLK 45 AND 50 STIRLING RD',24705.57,31033.88,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.2969337257257816,103.80371667974568');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Q17','BLK 52 STIRLING RD',24717.58,30953.45,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.2962063464606461,103.80382460327944');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Q19','BLK 151 MEI LING STREET',24654.5215,30786.998,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-7PM','NO','NO',0,0,'N','1.2947010066058078,103.80325801294278');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Q2A','BLK 155-164 STIRLING ROAD',24780.1309,30449.3691,'SURFACE CAR PARK','COUPON PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,0,'N','1.2916476231174145,103.80438670203422');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Q30','MARGARET DRIVE',25268.69,30911.89,'SURFACE CAR PARK','COUPON PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.2958305456656498,103.80877657038734');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Q4','BLK 168A QUEENSWAY',24726.8911,30124.9522,'SURFACE CAR PARK','COUPON PARKING','NO','NO','YES',0,0,'N','1.2887137054923081,103.803908353803');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Q41','BLK 80 STRATHMORE AVENUE',25318.4336,30747.652,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','NO','NO',0,4.5,'N','1.294345239395989,103.80922355228746');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Q48','BLK 150A MEI CHIN ROAD',24682.94,30859.67,'SURFACE CAR PARK','COUPON PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.2953582295668435,103.8035133577102');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Q49','MEI CHIN ROAD',24600.43,30852.65,'SURFACE CAR PARK','COUPON PARKING','7AM-7PM','NO','NO',0,0,'N','1.2952947342758825,103.80277197043519');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Q5A','BLKS 166-171 STIRLING ROAD',24644.4805,30393.2754,'SURFACE CAR PARK','COUPON PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,0,'N','1.2911403172091722,103.80316783226533');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Q5S','BLK 165-166 STIRLING RD',24530.9034,30353.3466,'SURFACE CAR PARK','COUPON PARKING','NO','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.290779202832361,103.80214729898866');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Q51','BLK 39 TANGLIN HALT ROAD',24187.6,31144.34,'SURFACE CAR PARK','COUPON PARKING','7AM-7PM','NO','NO',0,0,'N','1.2979326278162269,103.79906247903409');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Q52','BLK 33-34 TANGLIN HALT ROAD',24170.85,31017.51,'SURFACE CAR PARK','COUPON PARKING','7AM-7PM','NO','NO',0,0,'N','1.2967856200643242,103.79891198839513');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Q55','BLK 61/66 COMMONWEALTH DRIVE',23894.27,31228,'SURFACE CAR PARK','COUPON PARKING','7AM-10.30PM','NO','NO',0,4.5,'N','1.2986891819388953,103.79642676862868');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Q57','BLK 46-2 COMMONWEALTH DRIVE',24136.64,31357.44,'SURFACE CAR PARK','COUPON PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.2998598225856595,103.79860455464187');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Q58','BLK 46-3 COMMONWEALTH DRIVE',24031.02,31382.8,'SURFACE CAR PARK','COUPON PARKING','7AM-10.30PM','NO','NO',0,0,'N','1.300089156141582,103.7976555084121');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Q59','BLK 47/49 TANGLIN HALT ROAD',24023.14,31476.19,'SURFACE CAR PARK','COUPON PARKING','WHOLE DAY','NO','YES',0,0,'N','1.3009337412541244,103.79758469119325');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Q65','BLK 115A COMMONWEALTH DRIVE',24153.2643,31983.7356,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3055238204563318,103.79875385421073');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Q65A','BLK 96-111 AND 115 COMMONWEALTH CRESCENT',24418.636,32156.675,'SURFACE CAR PARK','COUPON PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,0,'N','1.3070878550554517,103.80113832326766');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Q66','BLK 117 COMMONWEALTH DRIVE',24236.01,32114.32,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3067047897222288,103.7994973472632');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Q67','BLK 116-118 COMMONWEALTH CRESCENT',24352.42,32166.07,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3071728123632282,103.80054334003208');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Q68','BLK 110 COMMONWEALTH CRESCENT',24181.18,32133.41,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-7PM','NO','NO',0,0,'N','1.3068774261960923,103.79900467147326');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Q70','BLK 99/102 COMMONWEALTH CRESCENT',24353.0804,32185.228,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-7PM','NO','NO',0,0,'N','1.307346070611529,103.80054927179201');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Q72','BLK 96 COMMONWEALTH CRESCENT',24391.78,32090.9,'SURFACE CAR PARK','COUPON PARKING','7AM-7PM','NO','NO',0,0,'N','1.306493006109802,103.80089701701327');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Q73','BLK 91/92 COMMONWEALTH DRIVE',24335.5387,32064.3962,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-7PM','NO','NO',0,0,'N','1.3062533085068155,103.80039166552683');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Q75M','BLK 10A HOLLAND DRIVE',23590.6968,32292.0387,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3083119292817016,103.79369887834429');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Q77M','BLK 18 HOLLAND DRIVE',23403.3645,32654.8683,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',12,2.15,'N','1.3115932040321492,103.79201555445782');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Q8','BLK 19/23A/23B QUEENS CLOSE',24244.0036,30732.3137,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,4.5,'N','1.294206414375908,103.79956933961495');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Q80','BLK 45/46/47 HOLLAND DRIVE',23479.7213,32316.8703,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,9.99,'N','1.30853648140917,103.79270170688473');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Q81','BLK 43 HOLLAND DRIVE',23531.2041,32206.3235,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,9.99,'N','1.3075367428678997,103.79316432035691');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Q84','BLK 2/4/6/31/32 HOLLAND CLOSE',23921.707,32122.75,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3067809877783394,103.79667318529349');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Q85','NORTH BUONA VISTA ROAD',23406.71,32283.49,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3082345910446525,103.7920456703827');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Q86','BLK 148A MEI LING STREET',24722.8381,30771.7904,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,1.8,'N','1.2945634816894223,103.8038718685725');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Q87','BLK 5A HOLLAND CLOSE',23873.3239,32354.7312,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',11,2,'N','1.3088789371038347,103.79623840948703');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Q88','BLK 19A QUEEN''S CLOSE',24354.2159,30597.8694,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2,'N','1.292990560657612,103.80055965992064');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Q89','BLK 7B COMMONWEALTH AVENUE',23741.0378,32063.6114,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',11,2,'N','1.3062461348732004,103.79504979530897');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Q92','BLK 82 STRATHMORE AVENUE',25236.2422,30797.7383,'SURFACE CAR PARK','COUPON PARKING','NO','NO','NO',0,4.5,'N','1.2947981950673044,103.80848502285889');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Q93','BLK 83 STRATHMORE AVENUE',25189.3828,30813.4336,'SURFACE CAR PARK','COUPON PARKING','NO','NO','NO',0,4.5,'N','1.2949401336399362,103.80806396955174');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Q94','BLK 102 COMMONWEALTH CRESCENT',24354.3978,32217.4868,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-7PM','NO','NO',0,0,'N','1.3076378079345645,103.80056110547325');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Q95','BLK 98 COMMONWEALTH CRESCENT',24433.0873,32115.9271,'SURFACE CAR PARK','COUPON PARKING','7AM-7PM','NO','NO',0,0,'N','1.3067193471401568,103.80126817971922');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Q96','BLK 181-184 STIRLING ROAD',24782.1998,30858.4456,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,4.5,'N','1.2953471669289198,103.8044052500753');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Q97','BLK 64 COMMONWEALTH DRIVE',24000.9896,31284.4381,'SURFACE CAR PARK','COUPON PARKING','7AM-7PM','NO','NO',0,0,'N','1.299199602060856,103.79738568437102');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Q98','BLK 55 COMMONWEALTH DRIVE',23989.771,31078.5446,'SURFACE CAR PARK','COUPON PARKING','7AM-7PM','NO','NO',0,4.5,'N','1.2973375726157685,103.79728490662436');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Q99','BLK 89 COMMONWEALTH DRIVE',24191.1767,31958.4905,'SURFACE CAR PARK','COUPON PARKING','7AM-7PM','NO','NO',0,4.5,'N','1.3052955173997665,103.79909451795866');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('RCM','BLK 638 VEERASAMY ROAD',30452.1642,32170.1999,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',6,2,'N','1.3072102800045187,103.85535244045683');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('RC1','BLK 101/102 JALAN RAJAH',30029.3828,34529.4805,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.328546809837194,103.85155370374846');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('RC2','BLK 103/104 JALAN RAJAH',30198.2024,34434.491,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3276877467528525,103.85307063417105');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('RC3','BLK 105/108 JALAN RAJAH',30364.4121,34500.5937,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3282855436779115,103.85456412458879');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('RHM','BLK 88A REDHILL CLOSE',26359.4531,29876.1692,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,1.9,'N','1.2864639274829988,103.81857760519372');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('RHM2','BLK 70A REDHILL CLOSE',26173.5652,29936.3581,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.2870082444741175,103.81690732416659');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('RHM3','BLK 73 REDHILL RD',26214.2901,30036.7081,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',17,2.15,'N','1.2879157769529903,103.81727324817024');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('RHM4','BLK 74 REDHILL RD',26052.2467,30044.7806,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.2879887721540015,103.81581722173429');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('RHS','BLK 75A/B REDHILL ROAD',26029.8967,30077.9357,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,4.5,'N','1.2882886138255218,103.81561639580704');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SAM','BLK 60A STRATHMORE AVENUE',25613.7877,30550.6392,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.2925635490008842,103.81187745068671');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SAM2','BLK 61 STRATHMORE AVENUE',25516.9485,30705.7785,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',12,2.15,'N','1.2939665666451008,103.8110072972267');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SB1','BLK 306B CANBERRA ROAD',26746.7947,47569.9618,'MULTI-STOREY CAR PARK','COUPON PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',5,2.15,'N','1.446480287012051,103.8220572791407');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SB10','BLK 481A SEMBAWANG DRIVE',26005.1646,48235.1526,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',13,2.15,'N','1.4524959874546903,103.81539294605084');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SB11','BLK 476A SEMBAWANG DRIVE',26146.3836,48155.5365,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',13,2.15,'N','1.4517759781995045,103.81666194814878');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SB12','BLK 424A CANBERRA ROAD',26413.575,48309.133,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.4531650655885577,103.819062926083');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SB13','BLK 404A ADMIRALTY LINK',26120.0717,48440.4225,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.454352381712315,103.8164254897947');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SB14','BLK 406A SEMBAWANG DRIVE',26232.1094,48224.2405,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',13,2.15,'N','1.4523973177575236,103.81743227735947');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SB15','BLK 358A ADMIRALTY DRIVE',26149.9066,47840.5307,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',16,2.15,'N','1.4489271805752422,103.8166936266961');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SB16','BLK 339 SEMBAWANG CLOSE',26218.5396,47769.2359,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',11,2.15,'N','1.4482824208020315,103.81731036780394');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SB17','BLK 504 MONTREAL DRIVE',26928.4878,48059.5679,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.4509081142282243,103.82368995407171');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SB18','BLK 469/469A/469B ADMIRALTY DRIVE',25816.924,47840.9691,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',8,2.05,'N','1.4489311212031601,103.81370144290963');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SB19','BLK 501 WELLINGTON CIRCLE',26668.9418,48135.1503,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.4515916427534172,103.82135766637343');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SB2','BLK 316A SEMBAWANG VISTA',26573.7982,47566.4296,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.4464483347703545,103.82050273329824');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SB20','BLK 505 CANBERRA LINK',26796.9569,47989.2006,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.4502717325718153,103.82250801852754');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SB21','BLK 467/467A/467B ADMIRALTY DRIVE',25876.3743,48156.1255,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',8,2.05,'N','1.4517812855899734,103.81423563978689');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SB22','BLK 351 CANBERRA ROAD',26549.9373,48088.2577,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.4511675571821494,103.82028829233381');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SB23','BLK 354 ADMIRALTY DRIVE',26338.6026,47963.0686,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','NO','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.450035380675405,103.81838924290304');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SB24','BLK 506 WELLINGTON CIRCLE',26910.8423,48226.4033,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.452416912231219,103.823531384856');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SB25','BLK 588 MONTREAL DRIVE',27050.5673,47980.1685,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',4,2.15,'N','1.4501900593556503,103.82478696492099');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SB26','BLK 484A ADMIRALTY LINK',25986.3619,48674.0283,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.4564650180938092,103.81522395296527');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SB27','BLK 492A ADMIRALTY LINK',26228.1281,48691.4308,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.456622416476301,103.81739647167682');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SB28','BLK 482A ADMIRALTY LINK',26032.4828,48496.9223,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.454863339256373,103.81563840952468');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SB29','BLK 508 WELLINGTON CIRCLE',26527.1938,48294.3119,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.4530310352110778,103.82008390804242');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SB3','BLK 325A SEMBAWANG CRESCENT',26381.2626,47401.3802,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.4449556774576704,103.81877261852807');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SB30','BLK 466 SEMBAWANG DRIVE',25798.9394,48563.7941,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',2,2.15,'N','1.4554680859084974,103.81353977631458');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SB31','BLK 463 SEMBAWANG DRIVE',25908.3774,48570.2721,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',6,2.15,'N','1.45552667904927,103.81452318921077');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SB32','BLK 591 MONTREAL LINK',27220.487,47999.719,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',8,2.15,'N','1.4503668722544203,103.82631386478543');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SB33','BLK 592 MONTREAL LINK',27345.0145,48093.3785,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',13,2.15,'N','1.4512138979419211,103.82743286825084');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SB34','BLK 462 SEMBAWANG DRIVE',25796.9155,48472.7851,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,3.8,'N','1.4546450335090653,103.8135215966649');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SB35','BLK 120 CANBERRA CRES',27808.9467,47485.5107,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',8,2.15,'N','1.4457165694498053,103.83160177449506');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SB36','BLK 121 CANBERRA ST',28073.8648,47675.4504,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',1,2.15,'N','1.4474343156995622,103.83398232747965');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SB37','BLK 106 CANBERRA STREET',27935.4647,47865.1427,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',8,2.15,'N','1.4491498239714464,103.8327386636083');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SB38','BLK 129 CANBERRA ST',27930.3532,47366.8059,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',14,2.15,'N','1.4446430469011269,103.83269273289434');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SB39','BLK 108 CANBERRA WALK',27876.1108,47714.037,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',11,2.15,'N','1.4477832787068854,103.83220530968379');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SB4','BLK 313A SEMBAWANG DRIVE',26659.5337,47304.5182,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.4440797074466687,103.82127316472292');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SB40','BLK 115 CANBERRA WALK',27486.3855,47524.8095,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2.15,'N','1.4460719694425117,103.8287032407236');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SB41','BLK 361 SEMBAWANG CRES',25822.6138,47537.0937,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',8,2.15,'N','1.446182983054787,103.81375259506224');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SB42','BLK 365 SEMBAWANG CRES',26100.1921,47335.3308,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',8,2.15,'N','1.4443583329813747,103.81624692605946');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SB43','BLK 117 CANBERRA CRESCENT',27621.3632,47413.9109,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',7,2.15,'N','1.4450690449281143,103.82991615123113');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SB44','BLK 102 CANBERRA STREET',27861.4431,48160.6538,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.4518223186911994,103.83207350346545');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SB45','BLK 132 CANBERRA VIEW',27715.1491,47227.684,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',2,2.15,'N','1.4433848775494935,103.83075891243509');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SB46','BLK 126 CANBERRA STREET',28115.5097,47515.5307,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',13,2.15,'N','1.4459880598634818,103.83435654794087');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SB5','BLK 322A SEMBAWANG CLOSE',26317.2063,47530.1084,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.4461198447407104,103.81819700149305');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SB6','BLK 306A CANBERRA ROAD',26802.1975,47444.0071,'MULTI-STOREY CAR PARK','COUPON PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',6,2.15,'N','1.4453412008877868,103.822555133907');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SB7','BLK 336A SEMBAWANG CRESCENT',25962.1661,47586.3759,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.4466286838914593,103.81500660782498');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SB8','BLK 330A SEMBAWANG CLOSE',26209.1886,47639.8142,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.4471119773997256,103.81722634794144');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SB9','BLK 335A SEMBAWANG CLOSE',26015.7785,47701.567,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.4476704341810682,103.81548836056405');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SDM','BLK 114A LORONG 3 GEYLANG MSCP',32577.6928,32750.7372,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',5,1.9,'N','1.3124602116224569,103.87445140859636');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SDM2','BLK 50A SIMS DRIVE',33023.254,33156.8404,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',4,2.15,'N','1.3161327950004906,103.87845506103255');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SD1','BLK 40-44 SIMS DRIVE',32870.5864,33205.4777,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3165726780306852,103.87708327324619');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SD10','BLK 113/114 LOR 3 GEYLANG',32536.1875,32664.7148,'SURFACE CAR PARK','COUPON PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,0,'N','1.311682261729381,103.87407845046522');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SD11','BLK 63 SIMS PLACE',33133.8433,33184.8063,'SURFACE CAR PARK','ELECTRONIC PARKING','NO','NO','YES',0,0,'N','1.3163856903514617,103.87944876634822');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SD2','BLK 45/50/51 SIMS DRIVE',33013.2144,33244.1573,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,4.5,'N','1.3169224596017053,103.87836486432721');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SD3','BLK 46/47/48/49 SIMS PLACE',33111.4554,33289.2189,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.317329964458469,103.87924761702766');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SD4','BLK 52 SIMS PLACE',33222.1008,33206.111,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3165783475838229,103.88024180819582');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SD5','BLK 53 SIMS PLACE',33185.7148,33337.7578,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.317768920515717,103.87991488367751');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SD9','BLK 114 LOR 3 GEYLANG',32471.3589,32673.4722,'SURFACE CAR PARK','ELECTRONIC PARKING','NO','NO','YES',0,4.15,'N','1.311761470021411,103.87349593503212');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SE1R','157 SERANGOON NORTH AVE 1',32008.2454,39269.0556,'SURFACE CAR PARK','COUPON PARKING','7AM-10.30PM','NO','NO',0,0,'N','1.3714096366112363,103.86933550523555');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SE11','BLK 151/154 SERANGOON NORTH AVE 1/2',32462.735,39138.1824,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,4.5,'N','1.3702260011119238,103.87341939616748');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SE12','BLK 211-222 SERANGOON AVENUE 4',32425.9955,37769.0271,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3578438574793177,103.87308906272622');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SE13','BLK 223/230 SERANGOON AVENUE 4',32118.9668,37628.3516,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3565716827001966,103.87033018876296');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SE14','BLK 231/237 SERANGOON AVENUE 3',32080.9673,37405.0495,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.354552223660293,103.86998870808891');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SE15','BLK 238/246 SERANGOON AVENUE 3',32016.5748,37221.793,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,4.5,'N','1.3528949261661782,103.86941007543464');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SE16','BLK 301/319 SERANGOON AVENUE 2',31828.4814,37191.2676,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3526188900569782,103.86771993211642');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SE17','BLK 321/329 SERANGOON AVENUE 3',31827.3152,37091.2582,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,0,'N','1.3517144409398179,103.86770944034198');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SE18','BLK 330/335 SERANGOON AVENUE 3',32133.8758,36923.5252,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','NO','NO',0,4.5,'N','1.3501974828614478,103.87046405891779');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SE19','BLK 201/210 SERANGOON CENTRAL',32493.0156,37426.3627,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,0,'N','1.3547449134036937,103.873691231019');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SE2','BLK 101/108 SERANGOON NORTH AVE 1',32141.4161,39120.5864,'SURFACE CAR PARK','COUPON PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,4.5,'N','1.3700669160712302,103.87053211749574');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SE20','BLK 264 SERANGOON CENTRAL',32315.8014,37076.1308,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',2,1.9,'N','1.351577567630948,103.87209879674317');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SE21','BLK 262/263 SERANGOON CENTRAL',32306.5934,37281.6467,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3534361812042228,103.87201608645344');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SE22','BLK 261/263 SERANGOON CENTRAL',32319.1389,37361.3217,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3541567315681,103.8721288272638');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SE23','BLK 253/254 SERANGOON CENTRAL DRIVE',32175.5882,37349.5073,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',7,1.9,'N','1.3540499067911238,103.87083893019735');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SE24','BLK 265 SERANGOON AVENUE 3',32248.5137,37207.3633,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,0,'N','1.3527643970392265,103.87149419262846');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SE25','BLK 401/408 SERANGOON CENTRAL/AVE 1',32385.3212,36493.6986,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,5.4,'N','1.346310249041107,103.8727233915193');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SE26','BLK 409/414 SERANGOON CENTRAL/AVE 1',32542.9488,36786.8864,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','NO','NO',0,5.4,'N','1.3489617111706056,103.87413981650265');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SE27','BLK 421/427 SERANGOON CENTRAL/AVE 1',32777.6686,36724.1991,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,5.4,'N','1.3483947531667362,103.87624891045581');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SE28','BLK 410A SERANGOON CENTRAL',32485.4629,36702.1845,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',10,2,'N','1.3481957061532068,103.87362325721168');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SE29','BLK 2A LORONG LEW LIAN',32727.6274,36890.9379,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',11,2,'N','1.3499026871040094,103.87579928529938');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SE3','BLK 109/112 SERANGOON NORTH AVE 1',32184.8437,39029.6133,'SURFACE CAR PARK','COUPON PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,0,'N','1.3692441818922345,103.87092233217425');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SE30','BLK 141A SERANGOON NTH AVE 1',32577.7448,38876.7994,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2,'N','1.367862129578908,103.87445279978023');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SE31','BLK 514/520 SERANGOON NORTH AVENUE 4',32490.834,39280.3789,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,4.5,'N','1.3715119708787575,103.8736719069539');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SE32','BLK 521/530 SERANGOON NORTH AVENUE 4',32337.793,39365.832,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,4.5,'N','1.3722848009296462,103.87229673775931');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SE33','BLK 537/542 SERANGOON NORTH AVENUE 4',32372.4102,39573.3748,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,4.5,'N','1.374161738277277,103.8726078285382');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SE34','BLK 531/536 SERANGOON NORTH AVENUE 4',32561.5329,39548.9793,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3739410854282346,103.87430722794699');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SE35','BLK 500/506B SERANGOON NORTH AVENUE 4',32778.0707,39455.8826,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,4.5,'N','1.3730991180086007,103.87625296021666');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SE37','BLK 519 SERANGOON NORTH AVENUE 4',32626.2779,39288.7385,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,4.5,'N','1.3715875511419595,103.87488896753737');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SE38','BLK 504A SERANGOON NORTH AVENUE 4',32718.2316,39550.3266,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2,'N','1.3739532452074859,103.87571527826657');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SE39','BLK 542A SERANGOON NORTH AVENUE 4',32271.7043,39500.6075,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',6,2.15,'N','1.373503671772787,103.87170290325065');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SE4','BLK 113-125, 142-148 SERANGOON NORTH AVE 1',32337.7296,38973.7878,'SURFACE CAR PARK','COUPON PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,4.5,'N','1.3687392940496161,103.87229611076802');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SE4S','BLK 149A SERANGOON NORTH AVENUE 1',32447.178,38780.0615,'MULTI-STOREY CAR PARK','COUPON PARKING','WHOLE DAY','NO','YES',5,2.15,'N','1.3669872866961779,103.87327955200178');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SE4T','BLK 113,115,117,118,120,121 SERANGOON NORTH AVE 1',32081.2625,38854.7014,'SURFACE CAR PARK','COUPON PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,0,'N','1.3676623559456051,103.86999155861743');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SE40','BLK 550A SERANGOON NORTH AVENUE 3',32084.7485,39394.1524,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2.15,'N','1.3725409566369569,103.87002295696432');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SE41','BLK 546A SERANGOON NORTH AVE 3',32105.7886,39560.7557,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2.15,'N','1.3740476540994038,103.87021204033407');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SE42','BLK 512A SERANGOON NORTH AVE 4',32650.2875,39210.4727,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2.15,'N','1.3708797396159602,103.87510469851748');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SE43','BLK 510 SERANGOON NORTH AVE 4',32714.58,39167.89,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','NO','NO',0,0,'N','1.3704946267818292,103.87568240519735');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SE5L','BLK 150 SERANGOON NORTH AVENUE 2',32677.0953,39047.1465,'BASEMENT CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,2.15,'Y','1.3694026719542893,103.8753455597718');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SE50','BLK 238A SERANGOON AVENUE 2',31927.5751,37333.0762,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.35390134346339,103.8686103707852');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SE51','BLK 257A SERANGOON CENTRAL DRIVE',32347.3644,37477.7718,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',7,2.15,'N','1.3552098604736453,103.87238246840384');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SE52','NEXT TO BLK 226 SERANGOON AVE 4',32264,37663.5,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,0,'N','1.3568895318365604,103.8716334117011');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SE53','BLK 150 SERANGOON NORTH AVE 2',32646.5636,39045.8726,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',4,2.15,'N','1.3693911560834149,103.87507121088753');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SE54','BLK 223A SERANGOON AVE 4',32212.7535,37730.9037,'SURFACE CAR PARK','COUPON PARKING','WHOLE DAY','NO','YES',0,0,'N','1.3574991140500354,103.87117293787533');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SE6','BLK 126 SERANGOON NORTH AVE 1',32291.7151,38654.071,'SURFACE CAR PARK','COUPON PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,0,'N','1.3658478968113656,103.87188259226863');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SE7','BLK 127 SERANGOON NORTH AVE 1',32311.0661,38616.7321,'SURFACE CAR PARK','COUPON PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3655102143875184,103.87205646888867');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SE9','BLK 135/141 SERANGOON NORTH AVE 2',32578.5299,38938.192,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3684173420705237,103.87445986390296');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SGLM','BLK 4A ST. GEORGE''S LANE',30994.8653,33878.8196,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2,'N','1.3226623838300844,103.86022903293475');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SGTM','BLK 25A/26/26A/26B ST.GEORGE''S LANE',31285.1184,33809.4155,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',8,2.15,'N','1.3220346879526756,103.86283710341827');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SG1','BLK 1/3/8 ST GEORGE RD',31081.3691,33941.3672,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3232280335397615,103.86100632168511');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SG2','BLK 14/19 ST GEORGE RD',31215.5547,34039.582,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3241162395100088,103.86221206094716');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SG3','BLK 20/23 ST GEORGE RD',31211.6165,34153.5582,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3251470002256687,103.86217668603142');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SG4','BLK 9/11 ST GEORGE RD',31314.7745,33950.196,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3233078536386083,103.86310359429157');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SH1','BLK 301-313 SHUNFU ROAD',28554.1079,36984.0277,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,4.5,'N','1.3507449261777251,103.83829758916401');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SH2','BLK 320 SHUNFU ROAD',28406.2288,37118.966,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',4,2.15,'N','1.3519652625237164,103.83696880365733');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SIM1','BLK 115 SIMEI STREET 1',41035.8834,36146.1393,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',5,1.9,'N','1.3431645423057599,103.9504537993987');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SIM2','BLK 125 SIMEI STREET 1',41421.5824,36471.461,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',9,1.9,'N','1.3461064600262502,103.95391967522477');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SIM3','BLK 166 SIMEI ROAD MSCP',41894.1857,36390.0702,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',5,1.9,'N','1.3453701772727074,103.95816625977923');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SIM4','BLK 248 SIMEI STREET 5',41380.0528,36193.553,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',7,1.9,'N','1.3435931829113548,103.95354638404818');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SIM5','BLK 256A SIMEI STREET 1',41239.177,36075.6849,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',10,2.15,'N','1.342527290332565,103.95228048073788');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SIM6','BLK 168 SIMEI LANE',41980.7224,36124.2827,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','NO','NO',2,2.15,'N','1.3429664551874474,103.95894372041212');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SI1','BLK 101/107 SIMEI STREET 1',41132.0547,35918.9005,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3411094378385866,103.95131785642268');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SI10','BLK 148 - 154 SIMEI STREET 1',41778.1055,36412.1574,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,5.4,'N','1.345569979069839,103.95712322052752');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SI11','BLK 155/162 SIMEI ROAD',42016.4544,36368.226,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.345172569755735,103.95926490626215');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SI12','BLK 163/165 SIMEI ROAD',41979.002,36445.3718,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,3.8,'N','1.3458702647263399,103.958928410002');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SI13','BLK 221/235 SIMEI STREET 4',41776.8118,36015.1241,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,4.5,'N','1.341979359948771,103.95711141512376');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SI14','BLK 142/145 SIMEI ST 2',41499.3416,36379.6414,'SURFACE CAR PARK','COUPON PARKING','7AM-10.30PM','NO','NO',0,0,'N','1.3452760431923798,103.95461834695517');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SI2','BLK 108/119 SIMEI STREET 1',41198.5644,36239.7964,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.344011471094061,103.9519156243752');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SI3','BLK 117/119 SIMEI STREET 1',41210.8437,36301.043,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3445653569991896,103.95202598786383');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SI4','BLK 120/122 SIMEI STREET 1',41238.5468,36333.2491,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3448566047035884,103.95227493068607');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SI5','BLK 120/130 SIMEI STREET 1',41426.516,36431.5438,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.345745461652442,103.9539639888232');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SI6','BLK 132 SIMEI STREET 1',41611.4102,36559.418,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3469018245740405,103.95562543072829');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SI7','BLK 132 - 139 SIMEI STREET 1',41685.6118,36617.7899,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,5.4,'N','1.347429684308167,103.95629220295606');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SI8','BLK 138 SIMEI STREET 1',41777.9717,36593.4263,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3472093067939954,103.95712210094223');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SI9','BLK 141/147 SIMEI STREET 2',41590.7201,36434.8566,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3457753474928342,103.95543946175466');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK1','BLK 133A RIVERVALE STREET',35884.5645,41149.7601,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3884172597070314,103.90416746999098');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK1K','BLK 272A SENGKANG CENTRAL',34678.7297,40731.1214,'SURFACE CAR PARK','COUPON PARKING','WHOLE DAY','NO','YES',0,0,'N','1.3846315451169156,103.8933320236058');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK10','BLK 241A COMPASSVALE WALK',35224.4669,41353.9464,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3902640175240086,103.89823603716263');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK11','BLK 226D COMPASSVALE WALK',35361.0715,41148.1882,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3884031811248507,103.8994634835394');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK12','BLK 103A RIVERVALE WALK',35494.0265,40573.0138,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3832014796474887,103.90065803933703');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK13','BLK 228D COMPASSVALE WALK',35503.532,41122.8627,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3881741101637362,103.90074359393208');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK14','BLK 142A RIVERVALE DRIVE',36014.7491,41304.3232,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3898150362870614,103.90533732069582');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK15','BLK 256A COMPASSVALE ROAD',35368.923,41723.2516,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',13,2.15,'N','1.3936038427321553,103.89953418022652');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK16','BLK 111A RIVERVALE WALK',35521.3711,40631.423,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3837297041351515,103.9009037659499');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK17','BLK 248A COMPASSVALE ROAD',35276.8508,41636.7294,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',13,2.15,'N','1.3928213907743747,103.89870681748124');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK18','BLK 188E RIVERVALE DRIVE',35927.2239,41842.1501,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3946789699893813,103.90455098519713');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK19','BLK 190C RIVERVALE DRIVE',35690.9808,41852.5684,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',9,2.15,'N','1.3947732529580326,103.90242815700068');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK2','BLK 236A COMPASSVALE WALK',35433.4759,41356.0962,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.390283406829785,103.9001141454177');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK20','BLK 191C RIVERVALE DRIVE',35851.5524,41777.5921,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2.15,'N','1.3940951516643634,103.90387099960198');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK21','BLK 117D RIVERVALE DRIVE',35766.7722,40531.9718,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.382830239537723,103.90310885240811');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK22','BLK 122F RIVERVALE DRIVE',36001.1909,41017.8685,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',13,2.15,'N','1.3872244484762688,103.9052154115567');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK23','BLK 121E SENGKANG EAST WAY',36099.0459,40907.1776,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',13,2.15,'N','1.3862233734196823,103.90609468269244');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK24','BLK 185 RIVERVALE CRESCENT',36172.8047,41735.4985,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3937143837711425,103.90675769276932');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK25','BLK 257 COMPASSVALE ROAD',35193.2717,41647.7381,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3929209702849534,103.89795579643965');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK26','BLK 259 COMPASSVALE ROAD',35037.7821,41713.346,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',12,2.15,'N','1.3935143423581946,103.89655861618257');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK27','BLK 119 RIVERVALE DRIVE',35803.6315,40755.9683,'BASEMENT CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',3,2.15,'Y','1.384855972302849,103.90344012017658');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK28','BLK 203 COMPASSVALE ROAD',34964.5908,40993.9848,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.387008719266741,103.89590076347676');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK29','BLK 204 COMPASSVALE DRIVE',34907.7394,41106.0902,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3880225732532274,103.89538993670813');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK3','BLK 205D COMPASSVALE LANE',35134.3189,40887.3355,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3860441807607229,103.89742587393226');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK30','BLK 260 SENGKANG EAST WAY',34957.9524,41736.067,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3937198420676984,103.89584128890573');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK31','BLK 195A RIVERVALE DRIVE',35706.3126,41679.5157,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3932082235368286,103.90256587963744');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK32','BLK 200 SENGKANG EAST ROAD',34548.7768,41065.8066,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',13,2.15,'N','1.3876583459669163,103.89216437348892');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK33','BLK 201 SENGKANG EAST ROAD',34574.9636,41140.2415,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',13,2.15,'N','1.388331502255945,103.89239969863985');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK34','BLK 299 COMPASSVALE STREET',35640.0823,42063.5105,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',13,2.15,'N','1.3966809496482944,103.90197084903363');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK35','BLK 297 COMPASSVALE STREET',35403.3489,41899.0368,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',13,2.15,'N','1.3951935711256291,103.89984356864697');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK36','BLK 301 ANCHORVALE DRIVE',34479.4144,41197.9512,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.388853429245623,103.89154112843642');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK37','BLK 303 ANCHORVALE LINK',34375.646,41042.6153,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3874486506871393,103.89060865561837');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK38','BLK 261 COMPASSVALE STREET',34829.7614,41852.9235,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',13,2.15,'N','1.3947766801720605,103.89468941910236');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK39','BLK 291 COMPASSVALE STREET',35205.0144,42017.0171,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3962605919227635,103.89806140504766');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK4','BLK 102A RIVERVALE WALK',35427.7063,40454.8668,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.382133018154954,103.90006207293183');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK40','BLK 306 ANCHORVALE LINK',34130.2215,41374.1249,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3904467559290814,103.88840339805577');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK41','BLK 305 ANCHORVALE LINK',34060.4225,41184.0668,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.388727954053827,103.88777616046258');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK42','BLK 304 ANCHORVALE LINK',34233.6919,41090.2204,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',13,2.15,'N','1.3878792046660133,103.88933309952311');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK43','BLK 290 COMPASSVALE CRESCENT',35107.1095,42039.9623,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3964681241488162,103.89718165705679');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK44','BLK 308 ANCHORVALE ROAD',33905.0798,41268.8098,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.389494370963902,103.88638030369823');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK45','BLK 295 COMPASSVALE CRESCENT',35280.3263,42165.1817,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3976005196183676,103.89873817955858');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK46','BLK 312 ANCHORVALE LANE',33763.8587,41567.8926,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',6,2.15,'N','1.3921991957345907,103.88511138181353');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK47','BLK 310 ANCHORVALE ROAD',33771.7581,41364.3158,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',6,2.15,'N','1.3903581193809866,103.88518232392211');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK48','BLK 321 ANCHORVALE DRIVE',34475.7019,41347.2977,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3902040655569785,103.89150780180584');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK49','BLK 319 ANCHORVALE DRIVE',34358.6228,41381.4575,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3905130202271294,103.89045576272206');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK5','BLK 124D RIVERVALE DRIVE',35726.2721,41068.0657,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3876784878398343,103.90274506989385');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK50','BLK 323 SENGKANG EAST WAY',34592.9265,41686.8525,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.393274849332756,103.89256123233135');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK51','BLK 325 SENGKANG EAST WAY',34472.1598,41724.1866,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3936125125577126,103.8914760567716');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK52','BLK 318,316A-316C SK52/56 ANCHORVALE LINK',34307.6386,41623.0083,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',6,2.15,'N','1.392697529031048,103.88999768221258');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK53','BLK 313,315A-315C SK53/57 ANCHORVALE ROAD',34015.6621,41607.626,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',6,2.15,'N','1.3925584790931926,103.88737404090284');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK54','BLK 184 RIVERVALE CRESCENT',36345.8603,41552.0224,'MULTI-STOREY CAR PARK','COUPON PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',11,2.15,'N','1.3920550439026387,103.9083126808751');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK55','BLK 160 RIVERVALE CRESCENT',36285.422,41009.03,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',7,2.15,'N','1.387144436859515,103.90776944192235');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK58','BLK 413 FERNVALE LINK',32996.0569,41263.3008,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',9,2.15,'N','1.3894447199134667,103.87821202833331');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK59','BLK 263 COMPASSVALE STREET',34958.0485,41925.5733,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,0,'N','1.3954336679585884,103.89584219765426');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK6','BLK 233A COMPASSVALE WALK',35525.092,41265.8605,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3894673245196159,103.90093736379647');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK60','BLK 404 FERNVALE LANE',32444.96,41076.957,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2.15,'N','1.3877595832507188,103.87325996745597');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK61','BLK 406 FERNVALE RD',32620.4698,41123.1753,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',15,2.15,'N','1.3881775375590957,103.87483706518715');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK62','BLK 408 FERNVALE RD',32829.9567,41201.1613,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',9,2.15,'N','1.3888827807769937,103.87671947913601');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK63','BLK 208 COMPASSVALE LANE',35195.6938,40666.4558,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3840466100888922,103.89797731984513');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK64','BLK 269 COMPASSVALE LINK',34946.9569,40704.5286,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3843909868901465,103.89574224092503');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK65','BLK 267 COMPASSVALE LINK',35087.586,40622.2863,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',13,2.15,'N','1.3836471836438378,103.89700587940098');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK66','BLK 156A RIVERVALE CRESCENT',36192.9313,41509.0921,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.14,'N','1.391666841561522,103.90693848256699');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK67','BLK 266 COMPASSVALE BOW',35097.5944,40434.3881,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',9,2.15,'N','1.3819478982409463,103.8970957670356');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK68','BLK 275 COMPASSVALE LINK',34780.0509,40557.9461,'BASEMENT CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','NO','NO',1,2.15,'Y','1.383065387262926,103.89424243103586');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK69','BLK 437 FERNVALE ROAD',32787.0554,41601.8227,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','NO','NO',8,2.15,'N','1.3925062248152205,103.87633404339043');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK7','BLK 224E COMPASSVALE WALK',35197.2219,41221.829,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3890692026660967,103.8979911872448');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK70','BLK 273 COMPASSVALE LINK',34835.6667,40693.9897,'BASEMENT CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','NO','NO',1,2.15,'Y','1.3842957031829366,103.89474221223843');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK71','BLK 277 COMPASSVALE LINK',34774.0235,40448.7069,'BASEMENT CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','NO','NO',1,2.15,'Y','1.382077469015427,103.89418824518275');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK72','BLK 272 SENGKANG CENTRAL',34740.622,40787.4947,'BASEMENT CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','NO','NO',1,2.15,'Y','1.3851413505292716,103.89388818553056');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK73','BLK 270 SENGKANG CENTRAL',34780.2916,40894.8139,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','NO','NO',10,2.15,'N','1.386111897173606,103.89424467166346');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK74','BLK 439 SENGKANG WEST AVE',32927.5192,41564.4693,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','NO','NO',9,2.15,'N','1.3921683906630222,103.87759621476171');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK75','BLK 441 FERNVALE ROAD',32650.9465,41502.7315,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','NO','NO',3,2.15,'N','1.391610101929328,103.87511098212606');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK76','BLK 210 COMPASSVALE LANE',35432.869,40808.116,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','NO','NO',12,2.15,'N','1.385327673894543,103.90010855296349');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK77','BLK 410 FERNVALE ROAD',32809.1737,41359.6037,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','NO','NO',8,2.15,'N','1.3903156800516567,103.87653275385786');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK78','BLK 443 FERNVALE ROAD',32535.1306,41510.8896,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',8,2.15,'N','1.3916838991563543,103.87407028683972');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK79','BLK 212 COMPASSVALE DRIVE',35425.2143,40897.3587,'COVERED CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','NO','NO',1,2.15,'N','1.386134754293024,103.90003979227858');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK8','BLK 126A RIVERVALE STREET',35664.287,41306.3404,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3898333736018222,103.90218814877606');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK80','BLK 434 FERNVALE ROAD',32808.4169,41758.3716,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',8,2.15,'N','1.3939219929429265,103.87652601904689');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK81','BLK 446 JALAN KAYU',32446.7092,41548.8847,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','NO','NO',2,2.15,'N','1.3920275267973765,103.87327575706905');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK82','BLK 182 RIVERVALE CRESCENT',36424.4447,41417.9477,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','NO','NO',0,0,'N','1.3908424987837502,103.90901878430238');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK83','BLK 450 SENGKANG WEST WAY',32461.1013,41787.9348,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','NO','NO',7,2.15,'N','1.394189407365092,103.87340511790634');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK84','BLK 180 RIVERVALE CRESCENT',36538.8836,41313.482,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',16,2.15,'N','1.3898977159081307,103.9100470759556');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK85','BLK 430 FERNVALE LINK',32987.7264,41793.5661,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.39424024897645,103.87813726284314');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK86','BLK 432 SENGKANG WEST WAY',32878.9647,41809.1498,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','NO','NO',8,2.15,'N','1.3943812008338834,103.87715995536384');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK87','BLK 448 SENGKANG WEST WAY',32429.5956,41673.2254,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','NO','NO',7,2.15,'N','1.3931520218095492,103.873121996799');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK88','BLK 451 SENGKANG WEST WAY',32538.8707,41769.3259,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',11,2.15,'N','1.394021103124232,103.87410393473561');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK89','BLK 326 ANCHORVALE ROAD',34146.3004,41863.1893,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',12,2.15,'N','1.3948696733879435,103.88854798239036');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK9','BLK 146A RIVERVALE CRESCENT',36079.7857,41414.8039,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3908141653016242,103.90592175523342');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK90','BLK 332 ANCHORVALE LINK',34570.2904,41861.2936,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3948524363141452,103.89235786844618');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK91','BLK 281 SENGKANG EAST AVE',34477.2956,40826.5256,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',14,2.15,'N','1.3854943914724183,103.89152200733054');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK92','BLK 279 SENGKANG EAST AVE',34630.7775,40899.9535,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',11,2.15,'N','1.386158412237721,103.89290117505988');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK93','BLK 453 FERNVALE ROAD',32681.0825,41760.0347,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3939370542563794,103.87538181892445');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK94','BLK 329 ANCHORVALE STREET',34234.9599,42028.5626,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',14,2.15,'N','1.3963652304633831,103.88934469373004');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK95','BLK 334 ANCHORVALE CRESCENT',34291.9886,42206.0484,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3979703351533226,103.88985718053233');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK96','BLK 440 FERNVALE LINK',33000.3795,41646.8467,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2.15,'N','1.392913369617143,103.87825093583899');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK97','BLK 350 ANCHORVALE ROAD',33889.5864,41641.0117,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','NO','NO',0,3.8,'N','1.3928604331140637,103.88624115849508');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK98','BLK 414 FERNVALE LINK',33204.2465,41285.8912,'COVERED CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',1,2.15,'N','1.38964898281577,103.88008277711182');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SK99','BLK 468 FERNVALE LINK',33034.2631,42108.8313,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3970913852933724,103.8785554864364');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SLS','BLK 4 SAGO LANE CAR PARK',29074.9041,29346.72,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,4.5,'N','1.281675799331273,103.84297700733707');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SL1','BLK 2 EAST COAST ROAD',38051.043,32673.7969,'SURFACE CAR PARK','COUPON PARKING','WHOLE DAY','NO','YES',0,0,'N','1.311763091336164,103.92363210709763');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SL2','BLK 3 EAST COAST ROAD',37997.8555,32648.7539,'SURFACE CAR PARK','COUPON PARKING','WHOLE DAY','NO','YES',0,0,'N','1.31153662886822,103.92315418376623');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SMM','BLK 53A STRATHMORE AVENUE',25135.7671,30634.5571,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',14,2.15,'N','1.2933224327438217,103.80758222567303');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SMML','BLK 50/51 STRATHMORE AVENUE',25259.6207,30666.3245,'SURFACE CAR PARK','ELECTRONIC PARKING','NO','NO','NO',0,0,'N','1.2936097370332735,103.80869510022471');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SM1','BLK 22 SIN MING ROAD',28668.8008,37777.1992,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3579180845082466,103.83932819509458');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SM2','BLK 23/24 SIN MING ROAD',28336.3289,37439.3599,'SURFACE CAR PARK','COUPON PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3548627917904421,103.8363407120641');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SM3','BLK 25 SIN MING ROAD',28639.6889,37421.9282,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.354705140754075,103.83906659791568');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SM5','BLK 1-21, 27-36 SIN MING INDUSTRIAL ESTATE',28553.6907,37871.1114,'SURFACE CAR PARK','COUPON PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,0,'N','1.3587673953431119,103.83829385667401');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SM6','BLK 37/39 SIN MING DRIVE',28512.4336,38159.9961,'SURFACE CAR PARK','COUPON PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,0,'N','1.3613799663428758,103.83792313923128');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SM8','BLK 22A SIN MING ROAD',28636,37711.8984,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',3,2.15,'N','1.3573275280540325,103.83903345689474');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SM9','BLK 24A SIN MING ROAD',28392.1992,37509.3008,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',2,2.15,'N','1.3554953117088098,103.83684274383292');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SPM','BLK 108 SPOTTISWOODE PARK MSCP',28257.4232,28489.7651,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',5,1.9,'N','1.2739258167233862,103.83563161921123');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SPS','BLK 101/102 SPOTTISWOODE PARK CAR PARK',28317.6841,28619.0984,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,3.5,'N','1.275095461256851,103.83617308630515');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SRS','BLK 1-2 SPOONER ROAD',27693.5872,28667.6456,'SURFACE CAR PARK','COUPON PARKING','WHOLE DAY','NO','YES',0,0,'N','1.275534505209877,103.83056534868176');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SR1','BLK 10 SELEGIE ROAD CAR PARK',29950.6152,31769.9941,'SURFACE CAR PARK','COUPON PARKING','WHOLE DAY','NO','YES',0,4.5,'N','1.303590995633722,103.85084575933864');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('SR2','BLK 8, 9 SELEGIE ROAD CAR PARK',29972.231,31722.9193,'SURFACE CAR PARK','COUPON PARKING','NO','NO','NO',0,0,'N','1.3031652663766071,103.85103998432383');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('STAM','BLK 56A STRATHMORE AVENUE',25398.1488,30582.3365,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.29285019100066,103.80993984128204');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('STM1','BLK 169A STIRLING ROAD',24647.2485,30296.4074,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',2,2,'N','1.2902642774663702,103.80319271421516');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('STM2','BLK 171A STIRLING ROAD',24703.9688,30248.287,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',6,2.15,'N','1.2898290995549109,103.80370237466215');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('STM3','BLK 168-171 STIRLING ROAD',24662.1367,30248.061,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.289827051258621,103.8033264959869');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('S100','BLK 472 FERNVALE STREET',33385.8789,42084.1752,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2.15,'N','1.3968683411312477,103.88171503224531');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('S101','BLK 470 FERNVALE LINK',33130.4351,42095.6631,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3969722799644926,103.8794196667925');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('S102','BLK 164 RIVERVALE CRESCENT',36266.5706,41244.503,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',14,2.15,'N','1.3892739738021436,103.90760011419339');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('S103','BLK 293 COMPASSVALE CRESCENT',34896.2847,42025.6613,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3963388421285396,103.89528722452656');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('S104','BLK 215 COMPASSVALE DRIVE',34647.5273,41351.7558,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',11,2.15,'N','1.3902443442059214,103.89305178725373');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('S105','BLK 217 COMPASSVALE DRIVE',34803.9591,41294.0789,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3897226991117926,103.8944574348319');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('S106','BLK 278 COMPASSVALE BOW',34316.7374,40374.0494,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',13,2.15,'N','1.3814023960148851,103.89007917301791');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('S107','BLK 338 ANCHORVALE CRESCENT',34275.0208,42337.3597,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',4,2.15,'N','1.3991578704764263,103.88970473952216');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('S108','BLK 289 COMPASSVALE CRESCENT',35081.2721,42217.8028,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',7,2.15,'N','1.3980764550818074,103.89694953065987');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('S109','BLK 417 FERNVALE LINK',33183.7608,41498.5269,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2.15,'N','1.3915719868305618,103.87989873490652');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('S110','BLK 351 ANCHORVALE ROAD',33931.8699,41689.9061,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',8,2.15,'N','1.3933026077126243,103.88662111892229');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('S111','BLK 455 SENGKANG WEST AVE',32220.5882,41525.3527,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',6,2.15,'N','1.3918147456311063,103.871243879004');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('S112','BLK 457 SENGKANG WEST RD',32051.503,41600.0851,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2.15,'N','1.3924906225860805,103.8697245262348');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('S113','BLK 353 ANCHORVALE LANE',33824.527,41667.8944,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',14,2.15,'N','1.3931035636363898,103.885656553991');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('S13L','351A-351D ANCHORVALE ROAD',33976.3641,41801.3132,'SURFACE CAR PARK','ELECTRONIC PARKING','NO','NO','NO',0,0,'N','1.3943101239551052,103.88702095718193');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('S14L','353A-353B,355A,356A-356B ANCHORVALE LANE',33672.15,41719.2634,'SURFACE CAR PARK','ELECTRONIC PARKING','NO','NO','NO',0,0,'N','1.3935681564447184,103.88428733664834');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('S19L','BLK 501B WELLINGTON CIRCLE',26619.279,48110.2064,'SURFACE CAR PARK','ELECTRONIC PARKING','NO','NO','NO',0,0,'N','1.4513660567718092,103.8209113968348');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('S24L','BLK 507A WELLINGTON CIRCLE',26930.1313,48308.6929,'SURFACE CAR PARK','ELECTRONIC PARKING','NO','NO','NO',0,0,'N','1.453161110192051,103.8237047130534');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('S28L','BLK 489 ADMIRALTY LINK',26156.746,48492.1384,'SURFACE CAR PARK','ELECTRONIC PARKING','NO','NO','NO',0,0,'N','1.4548200839405911,103.8167550426614');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('S30L','SENGKANG EAST WAY',34845.4319,41829.1525,'SURFACE CAR PARK','ELECTRONIC PARKING','NO','NO','NO',0,0,'N','1.3945617002088753,103.894830225379');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('S36L','BLK 121A AND 121B CANBERRA STREET',28033.599,47720.0557,'SURFACE CAR PARK','ELECTRONIC PARKING','NO','NO','NO',0,0,'N','1.4478377099077284,103.83362049901505');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('S38L','BLK 128A, 128B, 129A AND 130A CANBERRA STREET AND CANBERRA CRESCENT',27945.3404,47471.3997,'SURFACE CAR PARK','ELECTRONIC PARKING','NO','NO','NO',0,0,'N','1.4455889552961958,103.83282740751332');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('S39L','BLK 542A/542 SERANGOON NORTH AVENUE 4',32277.158,39545.2552,'SURFACE CAR PARK','ELECTRONIC PARKING','NO','NO','NO',0,0,'N','1.3739074487299336,103.87175191509527');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('S40L','BLK 115B AND 115C CANBERRA WALK',27600.8748,47574.1207,'SURFACE CAR PARK','ELECTRONIC PARKING','NO','NO','NO',0,0,'N','1.4465179239073442,103.82973204035795');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('S43L','BLK 117A, 117B, 118A AND 118B CANBERRA CRESCENT',27659.3104,47371.4915,'SURFACE CAR PARK','ELECTRONIC PARKING','NO','NO','NO',0,0,'N','1.444685419762401,103.83025714496723');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('S45A','BLK 132C AND 133 CANBERRA VIEW',27764.9761,47188.8337,'SURFACE CAR PARK','ELECTRONIC PARKING','NO','NO','NO',0,0,'N','1.4430335299984687,103.83120665743516');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('S45L','BLK 132A AND 132B CANBERRA CRESCENT',27821.7372,47226.2109,'SURFACE CAR PARK','ELECTRONIC PARKING','NO','NO','NO',0,0,'N','1.4433715562556566,103.83171671151054');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('S69A','BLK 437 FERNVALE ROAD',32847.355,41553.4443,'SURFACE CAR PARK','COUPON PARKING','7AM-7PM','NO','NO',0,0,'N','1.3920686980445378,103.87687587467782');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TAM1','BLK 507 TAMPINES CENTRAL 1',40534.8059,37474.7126,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',5,1.7,'N','1.3551798764166978,103.94595187637948');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TAM2','BLK 475 TAMPINES STREET 44',41336.4164,38040.1724,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',9,2,'N','1.360293334389211,103.95315510409618');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TBCM','BLK 16A TELOK BLANGAH CRESCENT',26642.874,28889.9336,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.277544772322182,103.82112429824376');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TBC2','BLK 23A TELOK BLANGAH CRESCENT',26594.4985,28690.7096,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',3,2.15,'N','1.2757430581846334,103.82068963521908');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TBC3','BLK 3A TELOK BLANGAH CRESCENT',26248.2192,29055.7391,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',8,2.15,'N','1.2790442396857162,103.8175781692424');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TBK','BLK 84 TELOK BLANGAH HTS',25410.0758,28869.5953,'SURFACE CAR PARK','COUPON PARKING','7AM-7PM','NO','NO',0,0,'N','1.2773607628817014,103.81004715071302');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TBL','BLK 90B TELOK BLANGAH ST 31',25044.3866,28772.2926,'SURFACE CAR PARK','ELECTRONIC PARKING','NO','NO','NO',0,9.99,'N','1.2764807593689014,103.80676130700212');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TBM','BLK 48A TELOK BLANGAH DRIVE',25479.2441,28253.7507,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,1.8,'N','1.2717912859952163,103.81066870217602');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TBMT','BLK 80 TELOK BLANGAH ST 31',25059.9661,28475.4537,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','NO','NO',5,2.15,'N','1.273796254050209,103.80690132190573');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TBM2','BLK 73A TELOK BLANGAH STREET 32',25318.3879,28642.2103,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',4,2.15,'N','1.2753043651293554,103.8092233201548');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TBM3','BLK 78A TELOK BLANGAH STREET 32',25290.5101,28428.7979,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',14,2.15,'N','1.273374335911291,103.80897284613816');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TBM4','BLK 88A TELOK BLANGAH HEIGHTS',25156.3228,28862.5317,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.277296860355097,103.80776708675596');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TBM5','BLK 57A TELOK BLANGAH HEIGHTS',25599.7585,28608.3876,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.27499850707926,103.81175153966541');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TBM6','BLK 52A TELOK BLANGAH DR',25528.5116,28424.2252,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.2733330014606468,103.81111137475285');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TBM7','BLK 70 TELOK BLANGAH HEIGHTS',25497.8422,28748.5546,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',7,2.15,'N','1.276266120348283,103.81083577381348');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TBM8','BLK 90 TELOK BLANGAH STREET 31',25102.2101,28852.5891,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',11,2.15,'N','1.2772069380595044,103.80728086504851');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TBM9','BLK 93 TELOK BLANGAH STREET 31',25092.2521,28584.6862,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',13,2.15,'N','1.2747841174077592,103.80719141319861');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TB1','BLK 1/2/3/4/6 TELOK BLANGAH CRES',26359.0527,28989.3284,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','NO','NO',0,4.5,'N','1.2784436505669505,103.81857405338053');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TB10','BLK 38/40 TELOK BLANGAH RISE',26874.703,28321.7568,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,5.4,'N','1.2724063895047217,103.82320738795562');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TB11','BLK 42/43 TELOK BLANGAH RISE',26911.2155,28123.4116,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,3.8,'N','1.270612626227367,103.82353547243773');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TB14','BLK 113/114 DEPOT ROAD',25109.3906,29363.2539,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.2818252116961109,103.80734533801913');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TB17','BLK 50/71 TELOK BLANGAH DRIVE',25740.9065,28588.0794,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.2748148572261437,103.81301980698036');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TB18','BLK 72/74/84 TELOK BLANGAH DRIVE',25383.8683,28775.7738,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,4.5,'N','1.2765122720178512,103.80981167433998');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TB19','BLK 75/76 TELOK BLANGAH DRIVE',25261.3047,28571.479,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.274664691194812,103.80871041296764');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TB2','BLK 8-10 TELOK BLANGAH CRES',26444.6627,28896.6707,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','NO','NO',0,0,'N','1.2776056911548443,103.81934329580679');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TB22','BLK 79/80/81 TELOK BLANGAH DRIVE',25135.612,28488.1817,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,0,'N','1.2739113685398986,103.8075810262179');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TB23','DEPOT ROAD LORRY PARK',25985.6543,29309.834,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,0,'N','1.2813421691042253,103.81521890869696');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TB27','BLK 4001-4008 DEPOT LANE',25595.8755,29374.1443,'SURFACE CAR PARK','COUPON PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.281923741534188,103.81171659158566');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TB28','BLK 45 TELOK BLANGAH DRIVE',25306,28279.5996,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','NO','NO',0,0,'N','1.2720250401511513,103.80911204099417');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TB29','BLK 45 & 79 ALONG TELOK BLANGAH DRIVE',25069.197,28402.4038,'SURFACE CAR PARK','COUPON PARKING','WHOLE DAY','NO','YES',0,0,'N','1.273135617253313,103.80698427155059');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TB3','BLK 12/22 TELOK BLANGAH CRES',26458.5039,28811.9141,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,0,'N','1.2768391828598684,103.81946766823727');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TB4A','BLK 18 & 19 TELOK BLANGAH CRESCENT',26789.3262,28899.8419,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-7PM','NO','NO',0,4.5,'N','1.2776343854674193,103.82244022525481');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TB6','BLK 27/33 TELOK BLANGAH WAY',26757.168,28492.5299,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.273950797221028,103.82215128778147');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TB7','BLK 29/32 TELOK BLANGAH RISE',26673.4648,28437.3189,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,3.8,'N','1.2734514848822975,103.82139918679454');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TB8','BLK 30/31 TELOK BLANGAH RISE',26601.755,28348.037,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,3.8,'N','1.2726440475687413,103.8207548525513');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TB9','BLK 32/35 TELOK BLANGAH RISE',26766.3105,28419.3515,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,5.4,'N','1.2732889977607433,103.82223343925568');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TE1','BLK 115-117 JALAN BUKIT MERAH',27236.0312,29306.6816,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.2813137150572245,103.82645402589348');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TE13','BLK 78/80 MOH GUAN TERRACE/CHAY YAN STREET',27694.6129,29518.2043,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,9.99,'N','1.2832266599714872,103.8305745567538');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TE14','BLK 140/142 JALAN BUKIT MERAH',27503.2019,28827.5456,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,4.5,'N','1.2769805823717464,103.8288546648749');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TE2','BLK 105-107 JALAN BUKIT MERAH',27083.1099,29159.4607,'SURFACE CAR PARK','ELECTRONIC PARKING','NO','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.2799822967820151,103.82507997347741');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TE21','BLK 76 GUAN CHUAN STREET',27806.9987,29492.094,'SURFACE CAR PARK','COUPON PARKING','NO','NO','NO',0,0,'N','1.2829905284723673,103.83158438729436');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TE22','BLK 66/73 ENG WATT STREET',27918.1167,29540.7605,'SURFACE CAR PARK','COUPON PARKING','WHOLE DAY','NO','YES',0,0,'N','1.2834306517182195,103.83258282577629');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TE23','BLK 59 ENG HOON STREET',28023.0859,29632.3616,'SURFACE CAR PARK','COUPON PARKING','WHOLE DAY','NO','YES',0,0,'N','1.284259060034816,103.83352601524145');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TE24','KIM PONG ROAD',27642.8184,29641.8672,'SURFACE CAR PARK','COUPON PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.284345023306976,103.8301091615078');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TE25','BLK 17/31/141/150 KAMPONG BAHRU ROAD',27718.3359,28870.7891,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,4.5,'N','1.2773716640930206,103.83078772296444');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TE26','KERBSIDE TIONG BAHRU EST',27725.5076,29745.9783,'SURFACE CAR PARK','COUPON PARKING','WHOLE DAY','NO','YES',0,0,'N','1.2852865683978052,103.83085215573334');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TE27','BLK 77, 72, 71 & 58 SENG POH ROAD',27803.2031,29566.7725,'SURFACE CAR PARK','COUPON PARKING','WHOLE DAY','NO','YES',0,0,'N','1.2836658946065338,103.83155028187889');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TE28','BLK 81 TIONG POH ROAD/KENG KIAT STREET',27925.02,29451.2566,'SURFACE CAR PARK','COUPON PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.282621209858605,103.83264485484881');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TE29','BLK 79 PENG NGUAN STREET/CHAY YAN STREET',27776.6895,29392.8223,'SURFACE CAR PARK','COUPON PARKING','NO','NO','NO',0,0,'N','1.282092749833308,103.83131204800414');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TE3','BLK 108/110/112 JALAN BUKIT MERAH',27201.2559,29132.8223,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,4.5,'N','1.2797413916490008,103.82614156083444');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TE30','BLK 78 & 79 YONG SIAK STREET/MOH GUAN TERRACE',27652.541,29480.3242,'SURFACE CAR PARK','COUPON PARKING','NO','NO','NO',0,0,'N','1.2828840851961143,103.83019652469054');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TE4','BLK 132-138 JALAN BUKIT MERAH',27390.6755,28981.1406,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,0,'N','1.278369639755713,103.82784357064978');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TE9','BLK 61/69 SENG POH LANE',27961.4701,29590.094,'SURFACE CAR PARK','COUPON PARKING','WHOLE DAY','NO','YES',0,2.4,'N','1.2838768066709831,103.83297237300445');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TGML','BLK 64 AND 65 TEBAN GARDENS RD',17541.2774,33778.08,'SURFACE CAR PARK','ELECTRONIC PARKING','NO','NO','NO',0,0,'N','1.3217496873149595,103.73934148022144');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TGM1','BLK 63A TEBAN GARDENS RD',17493.7022,33714.2794,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3211726817146188,103.73891401431447');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TGM2','BLK 61 TEBAN GARDENS RD',17424.7554,33821.7982,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',9,2.1,'N','1.3221450186133503,103.73829445496823');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TGM3','BLK 22A TEBAN GARDENS RD',17539.8244,33945.2298,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',3,2.15,'N','1.323261328455708,103.73932836739344');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TGM4','BLK 57A TEBAN GARDENS RD',17308.7145,33863.5119,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2.15,'N','1.322522221646896,103.73725175304094');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TG1','BLK 24 & 25 TEBAN GARDENS',17351.3149,33950.9498,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.323312992864623,103.7376345093954');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TG2','BLK 49 TO 54 TEBAN GARDENS',17347.6784,33758.6936,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,3.8,'N','1.321574296948077,103.73760190016449');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TG3','BLK 30/31/46/48 TEBAN GARDENS',17500.7539,33654.8242,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,3.39,'N','1.320634993058801,103.73897739773975');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TG6','BLK 32, 39/41 TEBAN GARDENS',17736.171,33786.4157,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,3.8,'N','1.3218251384145,103.7410926969463');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TG7','BLK 33/38/43/45 TEBAN GARDENS',17869.5236,33600.6696,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,3.5,'N','1.3201453629777007,103.74229100005539');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('THM','BLK 37B COMMONWEALTH DRIVE',24057.579,31174.2517,'MULTI-STOREY CAR PARK','COUPON PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.2982031224521255,103.79789417922315');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TJ1K','ALONG YUNG SHENG ROAD',15558.467,35156.0339,'SURFACE CAR PARK','COUPON PARKING','WHOLE DAY','NO','YES',0,0,'N','1.334210647837335,103.72152435155093');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TJ18','BLK 63-66 YUNG KUANG ROAD',15662.8289,34894.8007,'SURFACE CAR PARK','COUPON PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3318481945093785,103.72246220687335');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TJ27','BLK 151/154 YUNG HO ROAD',15507.4392,34380.5493,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3271974323385998,103.72106615550845');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TJ28','BLK 364 YUNG AN ROAD',15439.9056,35477.7143,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',11,1.9,'N','1.3371197566812667,103.72045887880465');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TJ29','BLK 155A YUNG LOH ROAD',15645.0192,34485.0749,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2,'N','1.3281427792350164,103.72230234256993');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TJ30','BLK 163A YUNG PING ROAD',15638.0002,34701.6525,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2,'N','1.330101423802957,103.72223918558431');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TJ31','BLK 331A KANG CHING ROAD',15708.2643,35640.7797,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',11,2.15,'N','1.3385945699313218,103.72287016767315');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TJ32','BLK 346A KANG CHING ROAD',15409.2144,35801.6725,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',11,2,'N','1.3400495011789706,103.72018296672009');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TJ33','BLK 328A TAH CHING ROAD',15750.5079,35476.5566,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',11,2.15,'N','1.337109414406706,103.72324981677099');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TJ34','BLK 115A HO CHING ROAD',15894.1114,35134.964,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2.15,'N','1.3340202355395632,103.72454031144004');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TJ35','BLK 183A CORPORATION DRIVE',15665.26,35011.1747,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3329006387365558,103.72248400459613');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TJ36','BLK 121A YUAN CHING RD',15892.9516,35376.8603,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2.1,'N','1.3362078554823669,103.72452979381994');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TJ37','BLK 337 TAH CHING ROAD',15670.2177,35606.278,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3382825338635944,103.72252831122393');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TJ38','175 YUNG KUANG ROAD',15586.8737,34946.2629,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2.15,'N','1.3323135685345058,103.72177968691955');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TJ39','138 YUAN CHING ROAD',15758.7046,34458.9721,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',14,2.15,'N','1.3279067611579414,103.7233238770194');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TJ40','164 YUNG KUANG RD',15555.5191,34733.8176,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2.15,'N','1.3303922793325844,103.72149803520999');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TJ41','BLK 140 CORPORATION DRIVE',15766.9047,34337.8211,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',14,2.15,'N','1.326811119725581,103.7233976076755');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TJ42','BLK 150 CORPORATION DRIVE',15650.2468,34383.6425,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',5,2.15,'N','1.3272254643704178,103.7223493562525');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TM10','BLK 331A TAMPINES STREET 32',42126.6048,37272.8556,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','NO','NO',10,2,'N','1.353353646379414,103.96025509665814');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TM11','BLK 384A TAMPINES STREET 32',41934.0052,37388.5874,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',12,1.9,'N','1.3544003715798556,103.95852452338791');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TM12','BLK 390A TAMPINES AVENUE 7',41788.3197,37546.7093,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2,'N','1.355830434073,103.95721552075281');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TM13','BLK 374A TAMPINES STREET 34',41998.1122,37604.9556,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',8,2,'N','1.356357093788308,103.95910066578062');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TM14','BLK 891B TAMPINES AVENUE 8',38823.1951,36807.9012,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2.15,'N','1.3491501505382775,103.93057172796962');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TM15','BLK 450B TAMPINES STREET 42',41232.7759,37756.7953,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2,'N','1.3577306247732543,103.95222370166918');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TM16','BLK 230A TAMPINES STREET 21',41011.0361,37538.3082,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',9,1.9,'N','1.3557548071635046,103.95023113290056');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TM17','BLK 842A TAMPINES STREET 82',39648.4301,37036.0523,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',11,1.9,'N','1.3512131548911217,103.93798705865011');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TM18','BLK 856A TAMPINES STREET 82',39653.7508,37167.0637,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','NO','NO',10,2,'N','1.3523979713180392,103.93803491918698');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TM19','BLK 364A TAMPINES STREET 34',42025.283,37713.9356,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2.15,'N','1.3573426549157654,103.95934486358435');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TM20','BLK 366A TAMPINES STREET 34',42211.8682,37802.4125,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2.15,'N','1.3581427179881083,103.96102149209771');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TM21','BLK 340A TAMPINES STREET 33',42150.9608,37058.3057,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',10,1.9,'N','1.3514133266988855,103.96047384946219');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TM22','BLK 351A TAMPINES STREET 33',42413.1125,37152.4367,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,1.9,'N','1.3522644865607851,103.96282948823199');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TM23','BLK 354A TAMPINES STREET 33',42340.9357,37417.4815,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2,'N','1.3546614860304684,103.96218106175469');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TM24','BLK 359A TAMPINES ST 34',42258.7221,37501.1231,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',10,2,'N','1.3554179483948277,103.96144236093969');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TM25','BLK 497E TAMPINES STREET 45',41930.7103,37865.65,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',2,2,'N','1.3587147470147305,103.95849513834374');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TM26','BLK 497K TAMPINES STREET 45',42056.4696,37988.6087,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',2,2,'N','1.3598266797869678,103.95962522398689');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TM27','BLK 497L TAMPINES STREET 45',42085.7621,38079.9813,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',4,2,'N','1.3606530051149364,103.95988847902791');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TM28','BLK 498K TAMPINES STREET 45',41750.9046,38321.0985,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',6,2,'N','1.3628337349519701,103.95687967842433');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TM29','BLK 498C TAMPINES STREET 45',41998.9929,38083.5573,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',6,2,'N','1.360685386136671,103.95910880324719');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TM3','BLK 496A TAMPINES STREET 43',41048.1591,38147.3551,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,1.9,'N','1.3612627825031371,103.95056497201246');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TM30','BLK 701A TAMPINES STREET 71',39499.7604,37661.9755,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2.15,'N','1.3568738297975105,103.93665140890145');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TM31','BLK 716A TAMPINES STREET 71',39500.2011,37869.6384,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2.15,'N','1.3587518558468104,103.93665544860963');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TM32','BLK 723A TAMPINES STREET 72',39341.6396,37956.2945,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2.15,'N','1.3595356023853928,103.93523070362815');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TM33','BLK 727A TAMPINES STREET 71',39435.2754,37605.5615,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2.15,'N','1.356363667330084,103.93607194832384');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TM34','BLK 730A TAMPINES STREET 71',39141.5755,37700.2172,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2.15,'N','1.35721980974478,103.93343290207572');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TM35','BLK 742A TAMPINES STREET 72',39220.1743,37998.2245,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3599148478753305,103.93413927453108');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TM36','BLK 515 TAMPINES CTRL 7',39769.2878,37693.9606,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',4,2.15,'N','1.3571629858521386,103.93907329779347');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TM37','BLK 518 TAMPINES CTRL 7',39717.4254,37584.9156,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',4,2.15,'N','1.3561768438388726,103.93860723824409');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TM4','BLK 494A TAMPINES STREET 43',41225.8231,38349.9868,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',14,1.8,'N','1.363095228751706,103.95216148876754');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TM41','BLK 921A TAMPINES ST 91',40030.3277,36628.8151,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',11,2.15,'N','1.3475301018629242,103.94141848248229');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TM42','BLK 823A TAMPINES STREET 81',39149.9105,36784.3426,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',8,2.15,'N','1.3489369754158549,103.93350745764565');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TM43','BLK 202A TAMPINES STREET 21',41234.0246,37276.5181,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2.15,'N','1.3533871776405688,103.95223471017103');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TM44','BLK 499 TAMPINES AVE 9',41688.2888,37919.2972,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',4,2.15,'N','1.3592000246240452,103.95631685027053');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TM45','BLK 869C TAMPINES AVE 8',39093.7405,37493.1753,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',11,2.15,'N','1.3553474172451712,103.93300299723586');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TM46','BLK 522 TAMPINES CTRL 7',39699.2218,37846.9485,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3585465791925955,103.9384437696084');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TM47','BLK 519 TAMPINES CENTRAL 8',39889.1667,37644.1458,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',16,2.15,'N','1.356712431701245,103.94015046680201');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TM48','BLK 890 TAMPINES AVE 1',39220.4729,36578.8195,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',4,2.15,'N','1.3470782741084286,103.9341414275891');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TM49','BLK 494F TAMPINES ST 43',41321.7712,38447.8005,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3639797760612553,103.95302368936689');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TM5','BLK 492A TAMPINES STREET 45',41439.247,38351.4469,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',14,1.9,'N','1.363108337353691,103.95407924377642');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TM50','BLK 870B TAMPINES ST 86',38884.1396,37614.9003,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2.15,'N','1.3564483304452148,103.93111964390404');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TM51','BLK 879C TAMPINES AVE 8',38621.1252,37032.665,'MULTI-STOREY CAR PARK','COUPON PARKING','WHOLE DAY','NO','YES',12,2.15,'N','1.3511829039113983,103.92875608502447');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TM52','BLK 492 TAMPINES ST45',41621.3762,38441.3412,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',15,2.15,'N','1.3639212243422094,103.9557158355874');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TM53','BLK 859B TAMPINES AVE 5',39726.5335,37438.5434,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',13,2.15,'N','1.354853104447344,103.93868902311951');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TM54','BLK 875A TAMPINES STREET 86',38750.9399,37292.1188,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',5,2.15,'N','1.3535292620183652,103.92992264359661');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TM55','BLK 873A BLK 873A TAMPINES STREET 86',38838.0939,37441.3741,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',10,2.15,'N','1.3548790403480093,103.93070583108609');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TM6','BLK 307A TAMPINES STREET 32',41691.9427,37261.1308,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',11,1.9,'N','1.3532478142057633,103.9563493823792');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TM7','BLK 311A TAMPINES STREET 33',41833.9252,37212.6124,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',8,1.85,'N','1.3528089666562537,103.95762516100413');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TM8','BLK 316A TAMPINES STREET 33',41787.0937,37067.9473,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2,'N','1.3515006916954557,103.95720428465248');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TM9','BLK 330A TAMPINES STREET 32',41997.2837,37271.9383,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',10,2,'N','1.3533454115738064,103.9590930658874');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TPB1','BLK 18A LOR 6 TOA PAYOH',30590.6956,35360.7931,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',7,2.15,'N','1.3360648632051888,103.85659747937672');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TPL','BLK 5/7 TANJONG PAGAR',29078.289,28819.4744,'SURFACE CAR PARK','ELECTRONIC PARKING','NO','NO','NO',0,4.4,'N','1.2769075748749268,103.8430074041105');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TPM','BLK 1/6 TANJONG PAGAR MSCP',28999.272,28661.7751,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',7,1.8,'N','1.2754814002517159,103.84229740226218');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TPMA','BLK 60A LORONG 4 TOA PAYOH',29982.6197,35409.3079,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3365036597802413,103.85113356861135');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TPMB','BLK 156A LORONG 1 TOA PAYOH',29326.8155,35027.9474,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3330548065505448,103.84524077047034');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TPMC','BLK 110A LORONG 1 TOA PAYOH',29429.1872,36009.9728,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2.15,'N','1.3419358910635928,103.84616068448071');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TPMD','BLK 161A LORONG 1 TOA PAYOH',29290.1401,34713.1702,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',7,2.15,'N','1.3302080747111147,103.84491120787689');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TPME','BLK 93A LORONG 4 TOA PAYOH',29839.4181,35624.0957,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',7,2.15,'N','1.338446133420941,103.84984683207814');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TPMF','BLK 141A LORONG 2 TOA PAYOH',29366.473,35261.4638,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',7,2.15,'N','1.3351666442919834,103.8455971261008');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TPMG','BLK 128A LORONG 1 TOA PAYOH',29196.869,35602.2984,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',5,2.15,'N','1.3382490386578767,103.84407314986876');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TPMH','BLK 260 KIM KEAT AVENUE',30679.7745,34913.8565,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',8,2.15,'N','1.3320229196131697,103.85739786556707');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TPMJ','BLK 146A LORONG 2 TOA PAYOH',29353.495,35161.8974,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',5,2.15,'N','1.3342662016697888,103.84548050687825');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TPMK','BLK 194A KIM KEAT AVE',30810.4264,34798.1948,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',7,2.15,'N','1.3309769044577373,103.85857183592486');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TPML','BLK 233A LOR 8 TOA PAYOH',30849.5226,35599.7494,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',8,2.15,'N','1.3382258757437373,103.85892321210068');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TPMM','BLK 227A LOR 8 TOA PAYOH',30747.1931,35686.9065,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',8,2.15,'N','1.339014103039558,103.85800372941638');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TPMN','BLK 78B TOA PAYOH CENTRAL',29698.2634,35231.2092,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',7,2.15,'N','1.334893015641099,103.84857845222868');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TPMP','BLK 138 LORONG 1A TOA PAYOH',29277.9112,35429.2632,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',13,2.15,'N','1.336684166399769,103.84480135435739');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TPMQ','BLK 130 LORONG 1 TOA PAYOH',29061.1557,35461.8044,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',14,2.15,'N','1.3369784658429043,103.84285368128103');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TPMR','BLK 261A TOA PAYOH EAST',30487.836,35104.5323,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',14,2.15,'N','1.3337473401876614,103.85567320543203');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TPM2','BLK 101C LORONG 2 TOA PAYOH',29532.3014,35715.2153,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',7,2,'N','1.3392702038654263,103.84708721261616');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TPM3','BLK 171A LORONG 1 TOA PAYOH',28992.1869,34772.9821,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,1.95,'N','1.3307490035221916,103.84223393404972');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TPM4','BLK 81C LORONG 4 TOA PAYOH',29783.6897,35326.4304,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2,'N','1.3357541574703302,103.84934606221009');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TPM5','BLK 84C LORONG 2 TOA PAYOH',29560.4287,35333.5642,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2,'N','1.3358186853562588,103.84733993345499');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TPM6','BLK 35A LORONG 5 TOA PAYOH',30371.0062,35230.8425,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2.15,'N','1.3348896541471698,103.85462343286822');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TPM7','BLK 120A LORONG 2 TOA PAYOH',29402.5995,35779.293,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.339849706133816,103.84592176737183');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TPM8','BLK 11A LORONG 8 TOA PAYOH',30889.8975,35423.8667,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3366352513195696,103.85928598754207');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TPM9','BLK 10A LORONG 7 TOA PAYOH',30723.296,35473.1848,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3370812821443876,103.85778898074965');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TP10','BLK 68 LORONG 5 TOA PAYOH',30256.17,35233.77,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,2.15,'N','1.3349161381898234,103.85359156385053');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TP12','BLK 71/72 LORONG 5 TOA PAYOH',30090.95,35135.49,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.33402734061323,103.85210696045971');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TP14','BLK 63/64 LORONG 5 TOA PAYOH',30124.42,35341.3,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3358886108582282,103.85240772188124');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TP15','BLK 53 TO 55 LORONG 5 TOA PAYOH',29949.23,35517.2,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3374793997904213,103.85083354968118');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TP16','BLK 175/183 TO 185 TOA PAYOH TOWN CENTRE',29669.0734,35049.0624,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,9.99,'N','1.333245746223491,103.84831615333499');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TP17','BLK 177 TO 179 TOA PAYOH TOWN CENTRE',29699.9143,35107.3661,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.4,'N','1.3337730224911744,103.84859327961253');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TP18','BLK 186/191 TO 193 TOA PAYOH TOWN CENTRE',29939.32,34976.48,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3325893206738841,103.85074446814292');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TP2','BLK 85/A/B/C LORONG 4 TOA PAYOH',29660.7631,35373.4764,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3361796317904386,103.84824149822951');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TP20','BLK 158-161/163/168-174 LORONG 1 TOA PAYOH',29242.9935,34803.2161,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3310224198845166,103.84448757302648');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TP22','BLK 148 TO 150 LORONG 1 TOA PAYOH',29193.44,35154.68,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3342009367863636,103.84404232075967');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TP27','BLK 125/126/131 LORONG 2 TOA PAYOH',29329.7942,35524.3536,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.337544127996719,103.84526755743322');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TP3','BLK 66/70/73 LORONG 4 TOA PAYOH',30028.99,35280.77,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.335341205575822,103.85155022411541');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TP3A','BLK 3A LORONG 7 TOA PAYOH',30325.2783,35742.6437,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',2,2,'N','1.3395182059074207,103.85421258052412');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TP30','BLK 116/122 LORONG 1 TOA PAYOH',29448.3398,35862.8984,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,4.5,'N','1.340605801519669,103.84633277507527');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TP31','BLK 109/111 TO 115 LORONG 1 TOA PAYOH',29396.9527,35917.6634,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3411010791515976,103.84587103389032');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TP32','BLK 107/108/110-112 LORONG 1 TOA PAYOH',29572.6442,35915.372,'SURFACE CAR PARK','COUPON PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,0,'N','1.3410803478942421,103.84744972687201');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TP33','BLK 205 TO 207 TOA PAYOH NORTH',29531.7522,36074.2751,'SURFACE CAR PARK','COUPON PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3425174131789646,103.84708229584697');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TP34','BLK 49 TO 52 LORONG 5 TOA PAYOH',30127.27,35573.46,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,3.8,'N','1.3379881832413947,103.8524333470046');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TP36','BLK 43 TO 48 LORONG 5/6 TOA PAYOH',30278.0957,35382.7109,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,4.5,'N','1.3362631051523606,103.85378859000134');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TP39','BLK 28 TO 33 TOA PAYOH EAST',30329.012,35012.6167,'SURFACE CAR PARK','COUPON PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3329161007510246,103.85424607419382');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TP4A','BLK 4A LORONG 7 TOA PAYOH',30471.7791,35715.3312,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',2,2.15,'N','1.339271189725481,103.8555289746188');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TP40','BLK 241-259/25-27 KIM KEAT LINK/AVE',30603.6943,34876.733,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3316871944820912,103.85671423890005');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TP41','BLK 253/254/256 KIM KEAT AVENUE',30773.92,34907.95,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.33196949486601,103.85824381543758');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TP43','BLK 19 TO 23 LORONG 7 TOA PAYOH',30662.6827,35225.0847,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3348375584101952,103.8572443132639');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TP48','BLK 8 LORONG 7 TOA PAYOH',30599.96,35527.39,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,0,'N','1.3375715055634856,103.85668073960268');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TP49','BLK 4/5 LORONG 7 TOA PAYOH',30495.5625,35670.9258,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.338869601118049,103.85574267886197');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TP50','BLK 1 TO 3 LORONG 7 TOA PAYOH',30349.5891,35671.9011,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3388784330957695,103.85443102196794');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TP52','BLK 210 TO 215 LORONG 8 TOA PAYOH',30361.63,35951.68,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3414086530592093,103.85453923830799');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TP53','BLK 216 TO 221 LORONG 8 TOA PAYOH',30474.3865,36065.9505,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.342442065766628,103.85555243223665');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TP54','BLK 222 TO 224 LORONG 8 TOA PAYOH',30574.9288,35955.0251,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3414388874849328,103.85645585589974');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TP56','BLK 1 TO 21 LOR 8 INDUSTRIAL PARK',31018.2569,35434.7302,'SURFACE CAR PARK','COUPON PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3367334844118595,103.86043937234098');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TP57','BLK 1002 TO 1004 LORONG 8 TOA PAYOH',31025.8295,35236.265,'SURFACE CAR PARK','COUPON PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3349386349621684,103.86050739683266');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TP59','BLK 1003/1004 TOA PAYOH INDUSTRIAL PK.',31047.58,35155.12,'SURFACE CAR PARK','COUPON PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3342047862503883,103.86070282945401');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TP60','BLK 236 TO 240 TOA PAYOH LORONG 1',30107.83,35814.16,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,4.5,'N','1.3401649898779349,103.8522586839099');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TP61','BLK 190 TOA PAYOH CENTRAL MSCP',29669.5764,35018.5085,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',4,1.9,'N','1.3329694275615067,103.84832067140536');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TP62','BLK 199 TO 201 TOA PAYOH NORTH',29907.7722,35952.8982,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3414197021702758,103.85046105448889');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TP63','BLK 202 TO 204 TOA PAYOH NORTH',29748.8203,35990.7969,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3417624541860296,103.8490327787162');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TP64','BLK 199 & 203 TOA PAYOH NORTH',29813.3984,36054.5,'SURFACE CAR PARK','COUPON PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.342338558565159,103.84961305548721');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TP65','BLK 62B LORONG 4 TOA PAYOH',29973.9188,35315.1935,'SURFACE CAR PARK','COUPON PARKING','NO','NO','NO',0,4.5,'N','1.3356525231297396,103.85105537987442');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TP66','BLK 19 LOR 6 TOA PAYOH',30567.354,35273.679,'SURFACE CAR PARK','COUPON PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,0,'N','1.3352770362267168,103.85638773425211');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TP67','BLK 25-27/257-259 KIM KEAT AVE',30647.8392,34994.1728,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3327492745119407,103.85711091585085');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TP68','BLK 196 KIM KEAT AVE',30890.764,34815.7549,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,0,'N','1.3311357042252463,103.85929371591413');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TP7','BLK 100/103-106 LORONG 1 TOA PAYOH',29719.04,35774.23,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3398039017977614,103.84876517259427');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TP8','BLK 91-96/98/100 LORONG 3 TOA PAYOH',29684.0801,35728.6552,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.339391741464608,103.84845103464667');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TP8A','BLK 91-92 LOR 3/4 TOA PAYOH LOR 3 TOA PAYOH',29791.3108,35569.197,'SURFACE CAR PARK','COUPON PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.337949651964233,103.84941455648202');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TRM','BLK 14A KAMPONG ARANG ROAD',33602.3061,31409.6032,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',5,2.15,'N','1.3003313037311022,103.8836578213832');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TRS','BLK 14 KAMPONG ARANG ROAD',33581.4137,31444.7784,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3006494194943536,103.88347010009001');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TR1','BLK 102/107 TOWNER ROAD',31092.8691,33554.6172,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,4.5,'N','1.3197304025188688,103.8611096164492');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TWM1','BLK 154A JALAN TECK WHYE',19566.0155,40125.5448,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2,'N','1.3791544765788482,103.75753302194053');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TWM2','BLK 158A JALAN TECK WHYE',19459.5932,40178.8656,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3796366595380902,103.75657672438628');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TWM3','BLK 160A JALAN TECK WHYE',19541.9487,40262.0437,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.380388915745668,103.75731672497658');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TWM4','BLK 165 TECK WHYE CRESCENT',19166.6753,40542.0167,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2.15,'N','1.3829207779958566,103.75394453367991');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TWM5','BLK 153 JALAN TECK WHYE',19687.1465,40113.8175,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',1,2.15,'N','1.3790484537958991,103.75862147579002');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TW1','BLK 25/26 TECK WHYE LANE',19301.8301,39963.4141,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,0,'N','1.3776881486417727,103.75515917100047');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TW2','BLK 15-20 TECK WHYE LANE',19225.6875,40080.8281,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3787499751507208,103.75447493964884');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TW3','BLK 8/11 TECK WHYE LANE',19229.041,40255.5469,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3803300689506603,103.75450502128673');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TW4','BLK 1/7 TECK WHYE AVENUE',19072.5156,40448.2227,'SURFACE CAR PARK','ELECTRONIC PARKING','NO','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3820725108563812,103.75309846721044');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TY1','BLK 1A TOH YI DRIVE',21441.5507,35689.479,'MULTI-STOREY CAR PARK','COUPON PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',8,1.9,'N','1.3390367795721163,103.77438705164957');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TY2','BLK 1-19 TOH YI DRIVE',21359.8594,35627.5039,'SURFACE CAR PARK','COUPON PARKING','7AM-10.30PM','NO','NO',0,4.5,'N','1.3384762811903568,103.77365302105257');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TY3T','BLK 17/18 TOH YI DRIVE',21219.4283,35808.8247,'SURFACE CAR PARK','COUPON PARKING','WHOLE DAY','NO','YES',0,0,'N','1.3401160500047624,103.77239112522147');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('TY4','BLK 21 TOH YI DRIVE',21172.689,35626.0278,'SURFACE CAR PARK','COUPON PARKING','7AM-10.30PM','NO','NO',0,2.5,'N','1.338462890108183,103.7719711861977');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('T1','BLK 101/108 TAMPINES ST 11',40645.1002,36633.3607,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.347570957621734,103.9469425868056');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('T11','BLK 149/151 TAMPINES STREET 12',40241.5939,36993.2916,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','NO','NO',0,0,'N','1.3508262061118295,103.94331698509697');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('T12','BLK 156/160 TAMPINES STREET 12',40513.9859,37022.0319,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','NO','NO',0,0,'N','1.3510860099421338,103.9457646070356');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('T13','BLK 161/166 TAMPINES STREET 12',40511.1172,36794.0234,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3490239873523109,103.94573873529592');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('T15','BLK 201A/201C TAMPINES STREET 21',41292.6602,37256.6602,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,0,'N','1.35320756420394,103.95276157879324');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('T16','BLK 202/205 TAMPINES STREET 21',41242.6367,37183.9531,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,0,'N','1.3525500507189219,103.95231205447516');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('T17','BLK 201D/209/208A TAMPINES STREET 21',41349.1055,37121.3281,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,4.5,'N','1.3519836463649708,103.95326871485535');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('T18','BLK 201E TAMPINES STREET 21',41423.7376,37254.2715,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,0,'N','1.3531859030595235,103.95393938972607');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('T19','BLK 210/230 TAMPINES STREET 23',41357.6797,37403.3437,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3545340856241221,103.95334588469461');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('T20','BLK 231/238 TAMPINES STREET 21',40691.5398,37589.1246,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,0,'N','1.356214509440848,103.94736027787849');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('T24','BLK 239/244 TAMPINES STREET 21',40682.5014,37392.3908,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,0,'N','1.3544353263886055,103.94727897895868');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('T25','BLK 245/248 TAMPINES STREET 21',40663.4797,37197.2727,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','NO','NO',0,0,'N','1.352670759318028,103.94710797478477');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('T26','BLK 249/266 TAMPINES STREET 21',40884.9727,37147.543,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3522209278111585,103.94909820583906');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('T27','BLK 251/253 TAMPINES STREET 21',40784.043,37234.2773,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.353005363721597,103.94819132677479');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('T28','BLK 257/260 TAMPINES STREET 21',40918.3711,37369.6133,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.35422923400605,103.94939840662882');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('T29','BLK 255/264 TAMPINES STREET 21',41092.9461,37347.4683,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3540288868380232,103.95096706281282');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('T3','BLK 109/114 TAMPINES ST 11',40700.7059,36530.5002,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3466407021741529,103.94744219430471');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('T30','BLK 267/271 TAMPINES STREET 21',40920.2995,37019.6152,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3510639814359522,103.94941558410157');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('T31','BLK 268-270 TAMPINES STREET 21',40760.3906,37026.1929,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3511235363506375,103.94797870694192');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('T32','BLK 272-275 TAMPINES STREET 22',41035.0411,36785.1588,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3489435958045182,103.95044650654403');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('T33','BLK 276/282 TAMPINES STREET 22',41243.9538,36627.3316,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3475161741738932,103.95232364470996');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('T34','BLK 283/286 TAMPINES STREET 22',41284.2492,36781.636,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,0,'N','1.3489116274391826,103.9526857910777');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('T35','BLK 287/298/299A/299B TAMPINES STREET 22',41456.957,36778.5156,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,0,'N','1.3488833306241519,103.95423767400024');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('T37','BLK 801, 820, 897/898 TAMPINES AVE 4/STREET 81',39523.5039,36609.7734,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3473580948340884,103.93686435633276');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('T38','BLK 902-916, 942-946 TAMPINES STREET 91',39932.1232,36937.4179,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3503210301813997,103.94053617774951');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('T39','BLK 921-941 TAMPINES STREET 91',39926.9824,36424.8207,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,4.5,'N','1.3456852935378585,103.94048978184573');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('T4','BLK 124/127 TAMPINES STREET 11',40964.6909,36395.5354,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3454200181193654,103.94981419991521');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('T41','BLK 821/829 TAMPINES STREET 81',39350.702,36706.421,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3482322058800837,103.93531166289078');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('T42','BLK 824/827 TAMPINES STREET 81',39062.7271,36823.2135,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,4.5,'N','1.349288541806568,103.93272407564717');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('T43','BLK 831/841 TAMPINES STREET 83',39241.8985,37029.2046,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,0,'N','1.3511513824159749,103.93433411754482');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('T44','BLK 830/840 TAMPINES STREET 82',39357.5533,36980.6496,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,4.5,'N','1.3507122252686106,103.93537332934675');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('T45','BLK 843/855 TAMPINES STREET 83',39338.9023,37240.9629,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3530664094691605,103.93520583669451');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('T46','BLK 842/856 TAMPINES STREET 82',39486.3058,37178.0754,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,4.5,'N','1.3524976218939655,103.93653032554681');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('T47','BLK 857/864 TAMPINES STREET 83/AVE 5',39527.3164,37445.0986,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.354912464910641,103.93689893386825');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('T47A','BLK 864B TAMPINES STREET 83',39328.7136,37444.6416,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',5,1.9,'N','1.3549084080766363,103.9351143616567');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('T48','BLK 865/874A TAMPINES ST 83/84',39076.7194,37331.671,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,4.5,'N','1.3538868383953706,103.93284999223376');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('T49','BLK 875/886A TAMPINES STREET 84 /AVE 8',38918.6987,37122.0189,'SURFACE CAR PARK','COUPON PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,4.5,'N','1.3519908804356806,103.93143000035836');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('T49A','BLK 882A TAMPINES STREET 83',39139.9893,37058.3736,'MULTI-STOREY CAR PARK','COUPON PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',5,1.8,'N','1.351415214205705,103.93341841093579');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('T50','BLK 887-889 TAMPINES ST 81/AVENUE 3',38870.9497,36981.7596,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,4.5,'N','1.350722444483302,103.93100089511285');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('T51','BLK 894-896 TAMPINES STREET 81',38948.9356,36763.5017,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,0,'N','1.348748572139392,103.93170156744114');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('T54','BLK 513 TAMPINES CENTRAL 1',40286.9005,37300.6184,'SURFACE CAR PARK','COUPON PARKING','WHOLE DAY','NO','YES',0,4.5,'N','1.3536055365743196,103.94372421839132');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('T55','BLK 501/508 TAMPINES CENTRAL 1',40456.9061,37597.9862,'SURFACE CAR PARK','ELECTRONIC PARKING','NO','NO','NO',0,0,'N','1.3562947494678366,103.94525194863866');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('T56','BLK 827A TAMPINES ST 81',39079.6727,36911.3845,'SURFACE CAR PARK','COUPON PARKING','7AM-10.30PM','NO','NO',0,0,'N','1.3500859214996346,103.93287637469005');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('T57','BLK 885A TAMPINES ST 83',39101.1472,36984.4555,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','NO','NO',0,0,'N','1.3507467406692826,103.93306936325641');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('T58','BLK 872A TAMPINES ST 86',38884.7143,37492.6034,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,0,'N','1.3553423222405985,103.93112476356991');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('T7','BLK 136/138 TAMPINES ST 11',40518.5548,36401.0077,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3454696968380175,103.94580540367221');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('T7A','BLK 136A TAMPINES ST 11',40498.7308,36344.861,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.344961935269822,103.94562724999825');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('T72','BLK 401/417 TAMPINES STREET 41',40496.7609,37796.9601,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.358094178380462,103.94561015235342');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('T73','BLK 418/424 TAMPINES STREET 41',40642.7732,37796.0139,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3580855596142265,103.94692216628559');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('T74','BLK 425/428 TAMPINES STREET 41',40786.4727,37942.9375,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3594142202064794,103.94821346132831');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('T75','BLK 429/432 TAMPINES STREET 41',41035.8679,37933.5266,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,4.5,'N','1.3593290032272178,103.95045443431647');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('T76','BLK 433/443 TAMPINES STREET 43',41168.0391,38026.2765,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,3.8,'N','1.3601677402123415,103.9516421187105');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('T77','BLK 472/484 TAMPINES STREET 43/44',41294.1032,38193.2412,'SURFACE CAR PARK','ELECTRONIC PARKING','NO','NO','NO',0,4.5,'N','1.3616776499929346,103.95277496065587');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('T78','BLK 444/450 TAMPINES STREET 42',41120.082,37750.8945,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,4.5,'N','1.357677310049552,103.95121107233167');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('T79','BLK 451/460 TAMPINES STREET 42',41482.7031,37721.6602,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,4.5,'N','1.3574127639795233,103.9544694414274');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('T8','BLK 137/139 TAMPINES ST 11',40338.7812,36505.4414,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.346414230732235,103.94419007328719');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('T80','BLK 461/471 TAMPINES STREET 44',41494.2122,37985.4918,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3597987523788764,103.9545729769663');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('T81','BLK 485A/489C TAMPINES ST 45/AVE 9',41871.9858,38044.2348,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3603298279115956,103.95796754389438');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('T9','BLK 140/148 TAMPINES STREET 12',40278.3039,36660.4761,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,4.5,'N','1.34781633164446,103.94364671149815');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('UAM1','BLK 2A JOO SENG RD',33107.6324,35187.5516,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.334497808758929,103.87921358148903');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('UA2','BLK 3 TO 5 UPPER ALJUNIED LANE',33109.332,35098.3344,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3336909599995777,103.87922883841429');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('UA3','BLK 10/11/19 TO 21 JOO SENG ROAD',33265.027,35204.8735,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,0,'N','1.3346544348736076,103.88062786479004');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('UA4','BLK 8 JOO SENG ROAD',33075.3159,35275.3778,'SURFACE CAR PARK','COUPON PARKING','7AM-10.30PM','NO','NO',0,0,'N','1.3352920829560446,103.87892321391799');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('UA5','BLK 12 TO 18 JOO SENG ROAD',33326.6984,35410.4255,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,5.4,'N','1.3365133628413508,103.88118205349524');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('UA6','BLK 2 UPPER ALJUNIED LANE',33101.2667,35157.3013,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3342242369297428,103.87915637697861');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('UBA4','UBI AVE 4',34994.9175,35328.5373,'SURFACE CAR PARK','COUPON PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,0,'N','1.3357724555455173,103.89617194548737');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('UBKM','BLK 13A UPPER BOON KENG ROAD',32179.7655,33010.5845,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3148102349625546,103.8708758709946');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('UBK2','BLK 11/15/18 UPPER BOON KENG',32237.8125,33097.6016,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3155971787692966,103.87139746428335');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('UBK4','BLK 19/20 UPPER BOON KENG',32537.2679,33063.4121,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,3.25,'N','1.3152879383142504,103.8740882168005');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('UBK5','BLK 38/39 UPPER BOON KENG',32522.9258,33422.543,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,3.25,'N','1.3185357926226624,103.87395939841554');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('UBM1','BLK 5 UPP BOON KENG RD',32374.0247,32770.798,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',7,2.15,'N','1.3126416639781875,103.87262135331036');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('UBM2','BLK 8 UPPER BOON KENG ROAD',32125.5883,32822.4057,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3131084199960408,103.87038903664025');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('UCS','BLK 34 UPPER CROSS STREET CAR PARK',28950.0781,29897.9961,'SURFACE CAR PARK','COUPON PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.2866613509167737,103.84185541409319');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('U1','BLK 101/110 BUKIT BATOK WEST AVE 6',18391.6404,36723.769,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3483897030178118,103.74698150151255');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('U10','BLK 178/184 BUKIT BATOK WEST AVENUE 8',18029.1321,36437.8173,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3458035421982828,103.7437242364325');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('U11','BLK 166 BUKIT BATOK WEST AVENUE 8',17982.2826,36616.6603,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-7PM','NO','NO',0,0,'N','1.3474209171225648,103.74330320604523');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('U12','BLK 201/211 BUKIT BATOK STREET 21',18668.6078,36565.8437,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,3.8,'N','1.3469615718341321,103.74947027262166');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('U13','BLK 212/230 BUKIT BATOK STREET 21',19086.17,36658.92,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3478034470020681,103.75322229615706');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('U14','BLK 217/219 BUKIT BATOK STREET 21',19276.68,36568.93,'SURFACE CAR PARK','COUPON PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,4.15,'N','1.3469896662522847,103.75493417141735');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('U15','BLK 231/237 BUKIT BATOK EAST AVENUE 5',19332.565,36778.361,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,5.4,'N','1.348883700209531,103.75543627209319');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('U16','BLK 238/241 BUKIT BATOK EAST AVENUE 5',19291.0823,36949.9677,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,5.4,'N','1.3504356366859565,103.7550634747906');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('U17','BLK 242/253 BUKIT BATOK EAST AVE 2/5',19484.9573,36912.4024,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,5.4,'N','1.350095965597911,103.7568055731971');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('U18','BLK 254/265 BUKIT BATOK EAST AVE 4',19699.5049,37022.2461,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3510894123958326,103.758733386708');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('U19','BLK 266/284 BUKIT BATOK EAST AVE 3/4',19653.7625,36736.2392,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 1PM-10.30PM','YES',0,4.5,'N','1.3485028571990103,103.75832244183866');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('U2','BLK 111/132 BUKIT BATOK WEST AVE 6',18316.8368,36887.7302,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,9.99,'N','1.3498724840033884,103.74630929254876');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('U20','BUKIT BATOK EAST AVE 2/6',19895.4902,36584.6445,'SURFACE CAR PARK','COUPON PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,0,'N','1.347131956113804,103.76049455516632');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('U21','BLK 301/309 BUKIT BATOK STREET 31',18569.9729,37715.1464,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,5.4,'N','1.3573554142331263,103.74858361747685');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('U22','BLK 310/323 BUKIT BATOK STREET 32/33',18339.7245,38092.0958,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3607643325033068,103.74651456484939');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('U23','BLK 407-426 BUKIT BATOK WEST AVE 2/4',18234.0951,38341.652,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 1PM-10.30PM','YES',0,0,'N','1.363021192573959,103.7455653333897');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('U24','BLK 324/336 BUKIT BATOK STREET 32/33',18465.58,38439.7002,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 1PM-10.30PM','YES',0,4.5,'N','1.3639079799053682,103.74764534848676');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('U24T','BLK 333/334 BUKIT BATOK WEST AVE 4',18441.4863,38506.9696,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 1PM-10.30PM','YES',0,9.99,'N','1.364516331909095,103.74742882883761');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('U25','BLK 337-353/355-356 BUKIT BATOK ST 34',18728.7311,38350.9289,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.363105248330535,103.75000996550129');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('U26','BLK 354/357-370 BUKIT BATOK ST 31',18742.24,38064.66,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3605163414314771,103.75013144078096');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('U27','BLK 371-373 BUKIT BATOK ST 31',18846.1378,37962.5676,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,9.99,'N','1.3595930873236555,103.75106506231087');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('U28','BLK 374-376 BUKIT BATOK ST 31',18790.052,37772.6738,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,9.99,'N','1.357875739924686,103.75056115304274');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('U29','BLK 376 BUKIT BATOK MSCP',18649.5445,37851.9011,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',3,1.9,'N','1.358592198792109,103.74929857711716');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('U3','BLK 133/139 BUKIT BATOK WEST AVENUE 6',18098.9773,37055.7538,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3513919565445387,103.74435163478552');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('U30','BLK 523-525 BUKIT BATOK STREET 52',19027.5388,37666.3629,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.3569143755488289,103.75269515817702');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('U31','BLKS 526-534 BUKIT BATOK STREET 51',18847.0784,37666.2614,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3569134026813678,103.75107360482853');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('U32','BLKS 512-514 BUKIT BATOK STREET 52',19018.5011,37355.1895,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,4.5,'N','1.3541002341981279,103.75261404178208');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('U33','BLKS 535-542 BUKIT BATOK STREET 51/52',18873.0414,37452.2798,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.354978239253692,103.75130696430529');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('U34','BLKS 501-511 BUKIT BATOK ST 52',19139.7066,37093.5044,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3517336858231854,103.75370322750783');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('U38','BLK 185/187 BUKIT BATOK WEST AVENUE 6',18124.0483,36539.8249,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,0,'N','1.3467260929497105,103.74457708245431');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('U39','BLK 631 BUKIT BATOK CENTRAL',18837.6188,36875.2113,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',2,1.9,'N','1.3497594316284736,103.75098884548056');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('U4','BLK 140/143 BUKIT BATOK STREET 11',17973.0318,36974.1108,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 1PM-10.30PM','YES',0,0,'N','1.3506535652301455,103.74321996303739');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('U40','BLK 644A BUKIT BATOK CENTRAL',18879.8441,36750.5885,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,1.9,'N','1.348632401397121,103.75136830370467');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('U41','BLK 632/644 BUKIT BATOK CENTRAL',18955.5289,36844.8175,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4,'N','1.3494845970551772,103.75204834998094');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('U41A','BLK 630 BT BATOK CENTRAL',18690.779,36915.3896,'SURFACE CAR PARK','COUPON PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,9.99,'N','1.3501227441783135,103.7496693864298');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('U43','BLK 404A BUKIT BATOK WEST AVENUE 7',18275.4565,38569.6475,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,1.9,'N','1.365083113738148,103.74593691879788');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('U45','BLK 285A BUKIT BATOK EAST AVE 3',19606.6244,36561.0495,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','7AM-7PM','NO','NO',2,2,'N','1.3469184920371304,103.75789892567173');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('U46','BLK 297 - 299 BUKIT BATOK ST 22 BUKIT BATOK STREET 22',18463.4479,36256.9749,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,0,'N','1.3441682107567325,103.74762688341653');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('U48','BLK 350 BUKIT BATOK STREET 32',18590.8011,38166.1707,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,0,'N','1.3614343194045193,103.7487706304381');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('U49','210A BUKIT BATOK STREET 21',18817.5304,36385.1968,'SURFACE CAR PARK','COUPON PARKING','7AM-7PM','NO','NO',0,0,'N','1.3453279131382925,103.75080848789271');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('U5','BLK 144/149 BUKIT BATOK WEST AVENUE 6',18135.2799,36917.0123,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 1PM-10.30PM','YES',0,0,'N','1.3501372412828894,103.74467788179186');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('U50','BLK 230A BUKIT BATOK ST 21 BUKIT BATOK ST 21',19356.5349,36607.8807,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.347341945336055,103.75565170531783');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('U51','BLK 412A BUKIT BATOK WEST AVE 4',18336.325,38543.2265,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',7,2.15,'N','1.3648441918571836,103.74648387196035');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('U52','BLK 194 BUKIT BATOK WEST AVE 6',18172.9985,36305.5813,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',6,2.15,'N','1.3446076956720479,103.74501700592981');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('U53','BLK 296 BUKIT BATOK ST 22',18363.2733,36194.2818,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',5,2.15,'N','1.3436012053234168,103.74672677463174');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('U54','241A BUKIT BATOK EAST AVE 5',19312.2301,36987.8524,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2.15,'N','1.3507782582674321,103.75525349002423');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('U55','BLK 445 BUKIT BATOK WEST AVE 8',17419.4393,36994.0568,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',8,2.15,'N','1.3508337587853503,103.73824558370262');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('U56','BLK 443 BUKIT BATOK WEST AVE 8',17317.656,37581.4848,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',13,2.15,'N','1.3561462048594217,103.73733078865953');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('U57','BLK 293 BUKIT BATOK ST 21',19323.1576,36459.7662,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3460024420437278,103.75535183241487');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('U58','BLK 448 BT BATOK WEST AVE 9',17668.5683,37144.9669,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',14,2.15,'N','1.3521986213490813,103.74048411069315');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('U59','BLK 292 BUKIT BATOK EAST AVE 6',19325.1186,36287.363,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.344443290774464,103.75536950267819');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('U6','BLK 150/158 BUKIT BATOK STREET 11',18071.3516,36683.9531,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 1PM-10.30PM','YES',0,9.99,'N','1.3480295181730968,103.74410352317281');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('U60','BLK 451 BUKIT BATOK WEST AVE 6',18060.8019,37237.9017,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.3530392226587264,103.74400854476275');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('U61','BLK440 BUKIT BATOK WEST AVE 8',17534.7152,37528.3789,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.355666011714305,103.7392812231256');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('U62','BLK 453 BUKIT BATOK WEST AVE 6',17844.6833,37081.9943,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2.15,'N','1.35162918067514,103.74206663560359');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('U63','BLK 377A BUKIT BATOK ST 31',18710.2749,37928.4781,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',3,2.15,'N','1.3592847521921185,103.74984425559475');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('U64','BLK 461 BUKIT BATOK WEST AVE 8',17583.3446,37408.1445,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',11,2.15,'N','1.3545786731075895,103.73971823110516');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('U65','BLK 439 BUKIT BATOK WEST AVE 8',17615.8232,37714.924,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',11,2.15,'N','1.3573530852890388,103.74000996570305');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('U66','BLK 436 BUKIT BATOK WEST AVE 5',17566.9792,37864.5832,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',15,2.15,'N','1.3587065308718105,103.73957101868784');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('U68','BLK 460 BUKIT BATOK WEST AVE 8',17588.9545,37339.3644,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',11,2.15,'N','1.3539566531598566,103.73976866347226');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('U69','BLK 467 BUKIT BATOK WEST AVE 9',18000.4363,37685.2975,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',5,2.2,'N','1.3570852858259188,103.74346597267898');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('U7','BLK 159/164 BUKIT BATOK STREET 11',17847.5676,36758.9474,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,9.99,'N','1.348707664112044,103.7420926617606');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('U70','BLK 463 BUKIT BATOK ST 41',17773.0352,37655.3275,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',6,2.15,'N','1.3568141709085375,103.74142263735465');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('U8','BLK 165/168 BUKIT BATOK WEST AVENUE 8',17825.5193,36588.034,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.347161978578853,103.7418946019014');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('U9','BLK 169/177 BUKIT BATOK WEST AVENUE 8',17748.6389,36445.3951,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.3458719785511333,103.74120383317253');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('WCB','BLK 261/262/264 WATERLOO BASEMENT CAR PARK',30072.1484,31241.1484,'BASEMENT CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',1,1.9,'Y','1.298808293680484,103.85193775629874');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('WCC','900 SOUTH WOODLANDS DR',22802.4706,46289.7139,'BASEMENT CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',2,2.15,'Y','1.434901737416896,103.78661383499883');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('WDB1','BLK 104 WHAMPOA DRIVE',30217.526,33669.5658,'BASEMENT CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','NO','NO',1,2.15,'Y','1.3207700328410228,103.8532442121171');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W10','BLK 4/5 MARSILING ROAD',21545.6709,46781.8077,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.4393517930056603,103.77532018596425');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W100','BLK 537-547 WOODLANDS DRIVE 16',23428.6148,45604.437,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-7PM','NO','NO',0,4.5,'N','1.4287044514208922,103.79224044528173');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W101','BLK 686 WOODLANDS DRIVE 73',24936.0215,47134.7585,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',5,2.15,'N','1.4425443267234417,103.80578572471495');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W102','BLK 687 WOODLANDS DRIVE 75',25028.4866,46986.64,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.4412048068517567,103.80661662993373');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W103','BLK 766A WOODLANDS CIRCLE',23995.6932,47488.7994,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',12,2.15,'N','1.445746024785028,103.79733590276876');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W104','BLK 688 WOODLANDS DR 75',25131.0901,47292.9142,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',14,2.15,'N','1.4439746500164974,103.80753859127668');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W105','BLK 689 WOODLANDS DR 75',25278.0655,47369.5027,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',7,2.15,'N','1.4446673032445179,103.80885930281751');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W106','BLK 690 WOODLANDS DRIVE 75',25235.6886,47178.0376,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',14,2.15,'N','1.4429357583642484,103.80847852325769');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W107','BLK 569A-569B CHAMPIONS WAY',23134.4358,45725.666,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,4.5,'N','1.4298007532188726,103.78959695405786');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W108','BLK 302A WOODLANDS STREET 31',21543.8287,45922.7283,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,2.4,'N','1.4315825936751343,103.77530382788211');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W109','BLK 764B WOODLANDS CIRCLE',23995.785,47408.7711,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','NO','NO',0,0,'N','1.4450222780478035,103.79733673907916');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W11','BLK 22/27 MARSILING DRIVE',21255.3672,47104.1328,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,4.5,'N','1.4422667144042791,103.77271145021517');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W11M','BLK 29A MARSILING DR',21271.52,47154.7049,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',12,2.15,'N','1.44272407375928,103.772856586806');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W12M','BLK 34A MARSILING DR',21198.8774,47366.6434,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',11,2.15,'N','1.444640749995164,103.77220377085864');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W13','BLK 201/206 MARSILING DRIVE',21488.674,47244.6194,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,4.5,'N','1.4435372787950995,103.77480790698276');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W14','BLK 210/218 MARSILING CRESCENT',21284.6738,47633.2891,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,0,'N','1.4470522162929949,103.77297467231821');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W16','MARSILING INDUSTRIAL EST',22275.6094,46924.5039,'SURFACE CAR PARK','COUPON PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,0,'N','1.4406424435772438,103.78187935887476');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W17','BLK 101-113 WOODLANDS ST 13',22249.7662,46486.5748,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.436681967868015,103.78164722176741');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W18','BLK 114-133 MARSILING RISE',22115.7552,46747.594,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.4390425021739406,103.7804429506256');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W181','BLK 181 MARSILING ROAD',21988.2079,46815.199,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',3,2.15,'N','1.4396538699810102,103.77929680078397');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W182','BLK 182 WOODLANDS STREET 13',21621.1257,46318.1491,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.4351586520067228,103.77599832470034');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W185','BLK 185 WOODLANDS STREET 13',21673.9257,46440.8216,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',14,2.15,'N','1.4362680690280447,103.77647275536113');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W19','BLK 134-143 MARSILING RD',21755.788,46587.4955,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.4375945522901354,103.77720833374326');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W20','BLK 144-166 WOODLANDS ST 13',21482.2371,46304.8149,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.4350380305719754,103.77475028200868');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W21','BLK 167-179 WOODLANDS ST 13',21847.2739,46264.664,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,4.5,'N','1.434675002710204,103.77803049237754');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W23','BLK 336-350 WOODLANDS STREET 32',22191.7187,45992.2266,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.4322112517049528,103.78112571087026');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W23T','BLK 344 WOODLANDS STREET 32',22109.3581,45893.4989,'SURFACE CAR PARK','COUPON PARKING','WHOLE DAY','NO','YES',0,0,'N','1.4313183774184202,103.78038564415175');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W24','BLK 321-335 WOODLANDS STREET 32',21992.0066,45860.9547,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.431024034840675,103.77933113821588');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W25','BLK 307-320 WOODLANDS AVENUE 1',21642.9242,45782.9456,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.4303184726534388,103.776194324814');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W26','BLK 301/302 WOODLANDS ST 31',21430.5762,45933.9805,'SURFACE CAR PARK','ELECTRONIC PARKING','NO','NO','NO',0,4.5,'N','1.431684328302075,103.7742861457737');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W27','BLK 303 WOODLANDS ST 31',21388.7832,45861.0977,'SURFACE CAR PARK','ELECTRONIC PARKING','NO','NO','NO',0,4.5,'N','1.4310251932285847,103.7739106135835');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W28','BLK 304/305 WOODLANDS ST 31',21382.8242,45760.7109,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','NO','NO',0,4.5,'N','1.4301173304284682,103.77385708979358');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W29','BLK 306/306A WOODLANDS ST 31',21484.0352,45758.1875,'SURFACE CAR PARK','COUPON PARKING','NO','NO','NO',0,4.5,'N','1.4300945332560169,103.77476656516625');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W3','BLK 4A/6A WOODLANDS CENTRE ROAD',20906.7446,46925.2015,'SURFACE CAR PARK','COUPON PARKING','WHOLE DAY','NO','YES',0,4.5,'N','1.4406484395019017,103.76957878115853');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W30','BLK 305 WOODLANDS ST 31',21406.332,45779.8253,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',3,2,'N','1.4302901995513786,103.77406832476436');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W36','BLK 801-810 WOODLANDS STREET 81',22780.8105,47005.8672,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.441378362111539,103.78641906620308');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W37','BLK 816-821 WOODLANDS STREET 82',23227.4135,47060.8098,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,4.5,'N','1.4418753225467142,103.79043222000014');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W39','BLK 830-836 WOODLANDS STREET 83',23315.9648,46842.418,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,4.5,'N','1.439900281792777,103.79122797617211');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W4','BLK 6/7 MARSILING DRIVE',21704.3672,47125.2891,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,4.5,'N','1.4424581487509198,103.77674614865396');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W4M','BLK 7A MARSILING DRIVE',21619.4951,47025.8162,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.4415585331685588,103.77598351244083');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W40','BLK 837-850 WOODLANDS STREET 82',23403.6522,47029.9515,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.441596280822762,103.79201590186972');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W41','BLK 851-856 WOODLANDS STREET 83',23548.9652,46854.6331,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,4.5,'N','1.440010788645249,103.79332170861841');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W43','BLK 406A WOODLANDS STREET 41',21182.9312,45692.8787,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',10,2,'N','1.429503833362866,103.77206088192747');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W44','BLK 413A WOODLANDS STREET 41',21205.5217,45525.4699,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2,'N','1.4279898550324301,103.77226391845875');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W45','BLK 421A WOODLANDS STREET 41',21528.0175,45524.5271,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2,'N','1.427981404325164,103.77516184012674');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W46','BLK 426A WOODLANDS STREET 41',21362.6102,45378.0962,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',10,2.15,'N','1.4266570986026104,103.77367553747727');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W47','WOODLANDS INDUSTRIAL PARK E',24046.4777,48144.5361,'SURFACE CAR PARK','COUPON PARKING','7AM-10.30PM','NO','NO',0,0,'N','1.4516762753721464,103.79779215949532');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W48','BLK 874A WOODLANDS STREET 81',23070.931,47203.7395,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2,'N','1.4431678994120059,103.78902604693761');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W49','BLK 839A WOODLANDS STREET 82',23405.0247,47174.9596,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2,'N','1.4429076813582187,103.79202821147776');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W5','BLK 10/13 MARSILING LANE',21865.5141,46936.8596,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.440754097260826,103.77819425199439');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W5M','BLK 13A MARSILING LANE',21927.7465,47034.7509,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',8,2.15,'N','1.441639403819997,103.77875344943124');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W50','BLK 846A WOODLANDS AVENUE 4',23590.4851,47176.9397,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2,'N','1.4429256184927484,103.79369475477245');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W505','BLK 505A WOODLANDS DRIVE 14',23357.861,45984.0543,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',7,2.15,'N','1.4321375604817492,103.79160459490267');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W509','BLK 509A WOODLANDS DRIVE 14',23101.6173,46110.9586,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',11,2.15,'N','1.433285193344649,103.78930198286766');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W51','BLK 866A WOODLANDS STREET 83',23472.5842,47106.6555,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2,'N','1.442289975024284,103.79263531082356');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W516','BLK 516A WOODLANDS DRIVE 14',23265.6873,46208.4999,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',11,2.15,'N','1.4341673493432647,103.79077629023024');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W517','BLK 517A WOODLANDS DRIVE 14',23348.3676,46205.981,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',13,2.15,'N','1.4341445831089208,103.7915192513937');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W519','BLK 519A WOODLANDS DRIVE 14',23440.3014,46253.1124,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',13,2.15,'N','1.434570837348946,103.79234535601556');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W52','BLK 823A WOODLANDS STREET 82',23122.1725,47008.073,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',11,2,'N','1.4413983720664534,103.78948653597385');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W521','BLK 521A WOODLANDS DRIVE 14',23581.4144,46183.1367,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',13,2.15,'N','1.4339380251133933,103.79361340104221');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W523','BLK 523A WOODLANDS DRIVE 14',23613.71,46071.6238,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',13,2.15,'N','1.4329295481086473,103.79390362480609');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W525','BLK 525A WOODLANDS DRIVE 14',23506.2589,46033.557,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',13,2.15,'N','1.4325852689082694,103.79293808149419');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W527','BLK 527A WOODLANDS DRIVE 14',23463.7611,45965.5899,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.4319705924079882,103.79255620965723');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W53','BLK 881A WOODLANDS STREET 82',23338.8254,47350.3849,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2,'N','1.444494152740703,103.79143331679937');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W536','BLK 536A WOODLANDS DRIVE 14',23348.8456,45873.6556,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',11,2.15,'N','1.431139153376069,103.79152360115795');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W54','BLK 824A WOODLANDS STREET 81',23076.3795,46789.1914,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',11,2,'N','1.439418878830239,103.78907507943372');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W546','BLK 546A WOODLANDS DRIVE 16',23558.6725,45719.8134,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',12,2.15,'N','1.4297478943267052,103.7934091160523');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W549','BLK 549A WOODLANDS DRIVE 44',23728.429,46002.0615,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.4323004696113972,103.79493449356124');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W55','BLK 859A WOODLANDS STREET 83',23683.3329,46831.8539,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2,'N','1.4398048028708408,103.79452913617222');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W554','BLK 554A WOODLANDS DRIVE 53',23871.6965,46028.6081,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.432540568742614,103.79622188281229');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W56','BLK 891C WOODLANDS DRIVE 50',23342.6004,46649.9806,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2.15,'N','1.4381599526095104,103.79146735457714');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W57','BLK 892C WOODLANDS DRIVE 50',23118.191,46497.6326,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',10,2.15,'N','1.436782134796882,103.78945084654262');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W570','BLK 570 WOODLANDS AVENUE 1',23182.8035,45847.6356,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',7,2.15,'N','1.4309038101239948,103.79003156211458');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W574','BLK 574 WOODLANDS DRIVE 16',24118.936,45812.819,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',14,2.15,'N','1.4305890857053498,103.79844359182096');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W578','BLK 578A WOODLANDS DRIVE 16',23923.9837,45898.4854,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.4313637939913717,103.79669175117783');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W579','BLK 579A WOODLANDS DRIVE 16',23795.194,45862.9987,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.431042846288806,103.79553446041886');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W58','BLK 895D WOODLANDS DRIVE 50',23429.9641,46416.6889,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',11,2.15,'N','1.4360501619073838,103.79225243917492');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W586','BLK 586A WOODLANDS DRIVE 16',23702.34,45656.6161,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.4291763831618285,103.79470011164346');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W588','BLK 588A WOODLANDS DRIVE 16',23701.8273,45550.4272,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.4282160492988063,103.79469552060216');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W59','BLK 897D WOODLANDS DRIVE 50',23693.3134,46446.5191,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',11,2.15,'N','1.436319976929915,103.79461887935159');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W6','BLK 15/16 MARSILING LANE',21838.7773,47085.957,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4,'N','1.4421024735721881,103.77795396332422');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W60','WOODLANDS AVENUE 5',23521.1992,46312.5,'SURFACE CAR PARK','COUPON PARKING','WHOLE DAY','NO','YES',0,0,'N','1.4351079301481928,103.79307229006791');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W61','BLK 358A WOODLANDS AVENUE 5',22505.7065,46103.3973,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',11,2,'N','1.4332167018188764,103.78394716416396');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W62','BLK 354A WOODLANDS AVENUE 1',22628.7386,46063.1814,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2,'N','1.4328530276276719,103.78505273108574');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W63','BLK 371A WOODLANDS AVENUE 1',22780.0672,46063.1491,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',11,2,'N','1.4328527639490236,103.78641256091407');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W64','BLK 605A WOODLANDS DRIVE 42',23969.4738,46630.5468,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2,'N','1.4379842973747616,103.7971004181586');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W65','BLK 701A WOODLANDS DRIVE 40',23844.7328,46979.1172,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2,'N','1.4411366228459082,103.79597944897567');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W66','BLK 709A WOODLANDS DRIVE 70',24069.321,46974.6261,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2.15,'N','1.4410960393771663,103.79799759340636');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W67','BLK 714A WOODLANDS DRIVE 70',24188.1546,47019.5375,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2.15,'N','1.4415022181337342,103.79906542301595');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W676','BLK 676 WOODLANDS DRIVE 71',24373.674,46827.139,'BASEMENT CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',2,2.3,'Y','1.4397622607819576,103.80073252063566');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W68','BLK 718A WOODLANDS AVENUE 6',24350.2675,47010.7245,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2.15,'N','1.4414225381608048,103.80052216679428');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W69','BLK 721A WOODLANDS AVENUE 6',24270.2765,47376.2034,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.4447277856226968,103.79980332120445');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W691','BLK 691 WOODLANDS DRIVE 73',24987.94,46924.7798,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2.15,'N','1.4406453613698962,103.80625228578869');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W693','BLK 693 WOODLANDS AVE 6',24703.9448,46642.49,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',9,2.15,'N','1.4380924031427158,103.80370034550494');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W694','BLK 694 WOODLANDS DR 62',24850.6084,46636.9442,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2.15,'N','1.4380422657769645,103.80501825982014');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W7','BLK 17/21 MARSILING LANE',21800.3125,47200.2539,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 1PM-10.30PM','YES',0,0,'N','1.4431361242898684,103.77760829441745');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W70','BLK 739A WOODLANDS CIRCLE',23937.0706,47352.2621,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.4445112227925496,103.79680914025236');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W71','BLK 728A WOODLANDS CIRCLE',24179.5955,47205.7795,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.4431865217487965,103.7989884858977');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W717','BLK 717C WOODLANDS DRIVE 70',24141.7435,46956.0986,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',1,2.15,'N','1.4409284934822917,103.79864838266636');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W72','BLK 792A WOODLANDS AVENUE 6',24505.386,47143.788,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.4426259357840807,103.80191604139279');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W73','BLK 796A WOODLANDS DRIVE 72',24711.6693,47219.5233,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.443310883261369,103.8037696903088');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W74','BLK 737A WOODLANDS CIRCLE',23886.366,47208.9992,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.4432155979701546,103.79635353028421');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W75','BLK 747A WOODLANDS CIRCLE',23800.172,47218.8422,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.4433046016671638,103.79557899104915');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W76','BLK 748A WOODLANDS CIRCLE',23747.0647,47397.2586,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.4449181264567497,103.7951017428101');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W77','BLK 757A WOODLANDS AVENUE 4',23613.1605,47523.5906,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.446060606235266,103.79389846144089');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W78','BLK 759A WOODLANDS AVENUE 6',23849.9464,47582.4593,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.4465930294608325,103.79602620929899');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W780','BLK 780 WOODLANDS CRESCENT',24414.7153,47764.032,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',13,2.15,'N','1.448235185003174,103.80110119714989');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W782','BLK 782 WOODLANDS CRESCENT',24689.6411,47760.7102,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.448205177850381,103.80357168153289');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W783','BLK 783 WOODLANDS RISE',24750.7857,47717.9903,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',14,2.15,'N','1.4478188418343625,103.80412113202219');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W785','BLK 785 WOODLANDS RISE',24848.101,47634.821,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',14,2.15,'N','1.4470667001503519,103.80499561676953');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W79','BLK 773A WOODLANDS DRIVE 60',24123.1011,47708.2983,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.4477311107371855,103.79848075891499');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W8M','BLK 2A MARSILING DRIVE',21660.0118,46873.6677,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',8,1.9,'N','1.4401825671937152,103.7763476286188');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W80','BLK 775A WOODLANDS CRESCENT',24330.2647,47756.4455,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2.15,'N','1.4481665644776578,103.80034232483115');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W81','BLK 786A WOODLANDS DRIVE 60',24296.7171,47514.7036,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2.15,'N','1.4459803344577076,103.8000408978971');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W82','BLK 787A WOODLANDS CRESCENT',24471.0095,47352.6032,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.4445143800769473,103.80160710865403');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W83','BLK 608A WOODLANDS RING ROAD',23975.8384,46423.1877,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.436109018098879,103.79715763971677');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W84','BLK 614A WOODLANDS AVENUE 4',23837.6593,46282.3619,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.434835420733408,103.7959159892951');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W85','BLK 622A WOODLANDS DRIVE 52',24192.1416,46200.7694,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.43409757803552,103.79910136039973');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W86','BLK 644A WOODLANDS RING ROAD',24420.08,46561.7115,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.4373618370230077,103.80114955716348');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W87','BLK 649A WOODLANDS RING ROAD',24317.8529,46691.9568,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.4385397149030177,103.80023093157095');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W88','BLK 656A WOODLANDS RING ROAD',24149.2668,46546.1362,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.4372209438665433,103.79871604274011');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W887','BLK 887 WOODLANDS DR 50',23702.7059,46585.151,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',12,2.15,'N','1.4375737147522807,103.79470325887424');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W889','BLK 889 WOODLANDS DRIVE 50',23582.22,46633.6669,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',14,2.15,'N','1.438012456174337,103.79362056980096');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W89','BLK 661A WOODLANDS RING ROAD',24131.2685,46393.746,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.4358427798925415,103.79855433158922');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W90','BLK 626A WOODLANDS DRIVE 52',24304.8642,46201.7037,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.434106042522579,103.80011427959667');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W91','BLK 630A WOODLANDS RING ROAD',24421.7399,46312.2663,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.4351059455726913,103.8011645045019');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W92','BLK 633A WOODLANDS RING ROAD',24520.8714,46439.9443,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.436260631413484,103.80205527963079');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W93','BLK 639A WOODLANDS RING ROAD',24580.5607,46608.2682,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.4377828988764212,103.8025916246883');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W94','BLK 678A WOODLANDS AVENUE 6',24441.8462,46881.242,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',7,2.15,'N','1.440251557351809,103.80134510711439');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W95','BLK 788A WOODLANDS CRESCENT',24490.3124,47314.8499,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.4441729554156386,103.80178056899176');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W96','BLK 667A WOODLANDS RING ROAD',24060.4226,46730.8096,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',13,2.15,'N','1.4388910505284627,103.79791766664522');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W97','BLK 671A WOODLANDS DRIVE 71',24212.7627,46796.478,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',11,2.15,'N','1.4394849525974802,103.79928658075396');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W98','BLK 681 WOODLANDS DRIVE 62',24682.0186,46808.9077,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2.15,'N','1.4395974217094079,103.80350329793248');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('W99','BLK 685 WOODLANDS DRIVE 73',24907.591,46937.7135,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',6,2.15,'N','1.4407623202986448,103.80553027040938');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('YHS','BLK 11/12/13 YORK HILL CAR PARK',28508.3965,29880.2227,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.2865006247607813,103.83788672656203');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y1','BLK 101/102 YISHUN AVE 5',27412.0991,45841.0373,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 1PM-10.30PM','YES',0,0,'N','1.430844542558391,103.82803573858487');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y10','BLK 753/774 YISHUN STREET 72/AVENUE 3',27995.96,45066.8145,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.4238427576500365,103.8332822753995');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y11','BLK 717/730 YISHUN STREET 71',27625.6289,45280.5234,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,5.4,'N','1.425775461218016,103.82995451109524');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y12','BLK 165/167,170/175 YISHUN RING ROAD/AVENUE 7',27905.7385,46499.201,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.4367967427386816,103.83247154839634');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y13','BLK 201/202, 207/212 YISHUN STREET 21',28505.9395,45881.9889,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,5.4,'N','1.4312148956597814,103.83786491910456');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y14','BLK 203/206, 213/222 YISHUN STREET 21',28260.7012,46043.2891,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.4326736396023134,103.83566122456354');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y14A','BLK 223/226 YISHUN STREET 21',28246.3185,46249.5229,'SURFACE CAR PARK','COUPON PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.4345387435451695,103.83553198421897');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y15','BLK 227/235 YISHUN STREET 21',28389.0234,46261.6211,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.4346481536830222,103.83681432353198');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y16','BLK 238/242 YISHUN RING ROAD',28681.0314,46086.2424,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.3,'N','1.433062086701487,103.83943828884158');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y16A','BLK 236/238 YISHUN RING ROAD',28648.4057,46162.6732,'SURFACE CAR PARK','COUPON PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.3,'N','1.4337532999482503,103.83914511785267');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y17','BLK 243/257 YISHUN RING ROAD/AVENUE 9',28872.75,46307.543,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.4350634439022487,103.84116106834902');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y18','BLK 258/264 YISHUN STREET 22',28689.2205,46383.1673,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.4357473677559185,103.8395118828426');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y19','BLK 265/289 YISHUN STREET 22/AVENUE 6',28538.5011,46605.7561,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.437760383486438,103.83815752931207');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y2','BLK 103/111 YISHUN RING ROAD',27414.6758,45987.2187,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 1PM-10.30PM','YES',0,0,'N','1.4321665542842144,103.82805888962513');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y20','BLK 293/294 YISHUN STREET 22',28504.9276,46440.0785,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,9.99,'N','1.436262055930077,103.83785583613886');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y21','BLK 290/292 YISHUN STREET 22',28426.9545,46510.8406,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,9.99,'N','1.4369020040104203,103.83715517427258');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y21A','BLK 290/292 YISHUN ST 22',28144.9395,46528.6914,'SURFACE CAR PARK','COUPON PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,9.99,'N','1.4370634430292049,103.8346209989693');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y21M','BLK 296A YISHUN STREET 20',28170.8701,46340.318,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.4353598620997021,103.83485400918354');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y22','BLK 1001/1019,1023/1024 YISHUN INDUSTRIAL PARK A',28063.7034,47038.6663,'SURFACE CAR PARK','COUPON PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,0,'N','1.4416754714402962,103.83389101572595');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y23','BLK 775-794 YISHUN RING RD/AVENUE 2',27862.1152,44818.0937,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.4215934162337678,103.83207955944775');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y24','BLK 795-799 YISHUN RING ROAD',27999.8887,44541.1562,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.4190888938075543,103.83331757837162');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y25','BLK 800-812 YISHUN RING ROAD',27742.9217,44276.3479,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.416694061920279,103.83100850345708');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y25M','813 YISHUN RING ROAD',27925.9358,44389.0052,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',8,2.15,'N','1.4177128949701683,103.83265304611761');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y26','BLK 816/820 YISHUN STREET 81',28057.7461,43852.7148,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.4128628780397983,103.8338374772831');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y27','BLK 821/830 YISHUN STREET 81',28033.9316,44001.6406,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.4142097093252848,103.83362348353374');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y28','BLK 832/841 YISHUN STREET 81',28043.8717,44130.9725,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.4153793403801003,103.83371280418633');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y28M','BLK 840A YISHUN STREET 81',28117.1717,44138.2643,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.4154452845870251,103.83437146893561');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y29','BLK 846 YISHUN RING ROAD',28135.416,44332.6484,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,9.99,'N','1.4172032241911097,103.8345354108658');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y3','BLK 112/120 YISHUN RING ROAD',27506.7793,46268.6172,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.434711422193888,103.8288865213412');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y3M','BLK 115A/115B/115C YISHUN RING ROAD',27349.1212,46139.6053,'BASEMENT CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 1PM-10.30PM','YES',1,2.1,'Y','1.4335446820813322,103.82746981634772');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y30','BLK 848 YISHUN STREET 81',28212.8196,44250.2645,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,9.99,'N','1.4164581734515562,103.83523094996433');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y30M','BLK 848A YISHUN STREET 81',28270.7412,44261.2589,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',9,1.8,'N','1.4165576023514577,103.83575142663024');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y31','BLK 850/855 YISHUN STREET 81/RING ROAD',28380.8499,44273.0647,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.416664368496263,103.83674085042306');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y32','BLK 858/864 YISHUN AVE 4',28587.6719,44363.8594,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.417485479503579,103.83859933016753');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y33','BLK 602-605 YISHUN STREET 61',28310.623,44888.4516,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.422229706333822,103.8361098064903');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y34','BLK 606-631 YISHUN STREET 61/RING ROAD',28317.9522,44732.3744,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.4208182004203624,103.83617566424124');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y34A','BLK 614-618 YISHUN STREET 61',28305.7045,44561.1014,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.4192692693735554,103.83606560585065');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y35','BLK 632/641 YISHUN STREET 61',28573.7168,44608.1172,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.4196944591717837,103.8384739361301');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y36','BLK 642/643 YISHUN STREET 61',28519.8262,44786.0742,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.42130383905766,103.83798968420109');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y37','BLK 644/647 YISHUN STREET 61',28429.5256,44875.402,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.4221116889226209,103.83717825347061');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y38','BLK 650/661 YISHUN AVENUE 4',28755.9082,44928.25,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.422589620352706,103.84011109694306');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y39','BLK 662/666,666A TO 666B YISHUN AVENUE 4',28802.1641,44647.4297,'MECHANISED AND SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.420049981718165,103.84052674015619');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y4','BLK 121/143 YISHUN STREET 11/RING ROAD',27798.7178,46273.0601,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,9.99,'N','1.4347516057895624,103.83150986637459');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y4T','BLK 137 YISHUN RING RD',27653.9599,46018.2543,'SURFACE CAR PARK','COUPON PARKING','WHOLE DAY','NO','YES',0,0,'N','1.4324472329803521,103.83020908207386');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y40','BLK 865/880 YISHUN STREET 81',28378.3276,44072.1863,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.4148476967331503,103.83671818270055');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y41','BLK 302-314 YISHUN CENTRAL/RING ROAD',28735.9258,45762.625,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.4301354067003145,103.83993155850986');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y41M','BLK 307 YISHUN RING ROAD/CENTRAL',28842.0106,45830.6181,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',9,1.9,'N','1.4307503087333369,103.84088483144117');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y43','BLK 320-332 YISHUN CENTRAL/RING ROAD',28865.8374,45625.9622,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.4288994741105225,103.8410989313104');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y45','BLK 343-346 YISHUN AVENUE 11',29095.1082,45430.1318,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,3.8,'N','1.4271284468798116,103.84315913476169');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y45M','BLK 347 YISHUN AVE 11',29036.205,45471.5063,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',2,2.15,'N','1.4275026251068441,103.84262983673823');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y46','BLK 349-359 YISHUN RING ROAD',29384.9686,45314.782,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,3.8,'N','1.426085252334137,103.84576379192454');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y47','BLK 360-367 YISHUN RING ROAD',29361.3242,45648.9258,'SURFACE CAR PARK','COUPON PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.4291071291117163,103.84555134125384');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y48','BLK 386-399 YISHUN RING ROAD/AVENUE 6',29613.5447,45679.9694,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,0,'N','1.429387862935583,103.84781777851204');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y48M','BLK 385 YISHUN RING/AVENUE 6',29581.4638,45567.1012,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',8,1.9,'N','1.4283671256018347,103.84752949552306');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y49','BLK 401/414 YISHUN RING ROAD/AVENUE 6',29613.2711,45312.13,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','SUN & PH FR 7AM-10.30PM','NO',0,0,'N','1.4260612565376325,103.84781529914531');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y49L','BLK 418/419 YISHUN AVE 11',29552.0163,45080.7449,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','NO','NO',0,3,'N','1.4239686967947986,103.84726485601676');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y49M','BLK 419A YISHUN AVENUE 11',29579.1438,45127.712,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',8,1.9,'N','1.4243934487682774,103.84750862385874');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y5','BLK 144/149 YISHUN STREET 11',27865.2344,45870.8907,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.4311145317303038,103.83210758322949');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y51','BLK 423/427, 433/440 YISHUN AVE 6/AVE 11',29529.83,44808.1062,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.4215030521476748,103.84706547736457');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y51M','BLK 441 YISHUN AVE 11',29363.3139,44945.2291,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',6,2.15,'N','1.4227431505685804,103.84556918695293');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y52M','BLK 456A YISHUN ST 41',29291.1048,44676.2316,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',12,2.15,'N','1.420310437739333,103.84492031076049');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y53M','BLK 426 YISHUN AVE 11',29413.0818,44965.2268,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',6,2.15,'N','1.422924000109211,103.84601639752874');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y54M','BLK 925 YISHUN CENTRAL 1',28413.6222,45450.4144,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',5,1.8,'N','1.4273118935008489,103.83703535537614');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y56','BLK 926/932,934/935 YISHUN CENTRAL 1',28383.2891,45244.5078,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-10.30PM','NO','NO',0,2.5,'N','1.4254497490743487,103.83676278174171');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y57','BLK 415/417 YISHUN RING ROAD/AVENUE 11',29461.0058,45083.3281,'SURFACE CAR PARK','ELECTRONIC PARKING','7AM-7PM','NO','NO',0,4.5,'N','1.4239920631489618,103.84644704407451');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y58','162 YISHUN STREET 11',27895.8292,46028.4287,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',0,0,'N','1.43253924851552,103.83238250558864');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y59M','BLK 429 YISHUN AVE 11',29764.6921,44893.3273,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',6,2.15,'N','1.4222737473701768,103.84917592983305');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y6','BLK 150/161 YISHUN STREET 11',28097.4355,46026.6367,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.432523042352014,103.83419412821748');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y60M','BLK 430 YISHUN AVE 11',29647.1253,44767.6656,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',6,2.15,'N','1.4211373154277043,103.84811947881221');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y61M','BLK 431 YISHUN AVE 1',29588.007,44651.6313,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',6,2.15,'N','1.4200879465053657,103.84758824136463');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y62M','BLOCK 342 YISHUN RING ROAD',29238.4163,45775.1779,'BASEMENT CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',1,2.15,'Y','1.4302489130537643,103.84444690507708');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y63M','BLK 333 YISHUN ST 31',29302.8265,45929.6846,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',6,2.15,'N','1.4316462128157172,103.84502569792517');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y64M','BLK 334 YISHUN ST 31',29314.7149,46022.7799,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',6,2.15,'N','1.4324881324444516,103.84513253066672');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y65M','BLK 315 YISHUN AVE 9',28968.6232,46042.758,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',6,2.15,'N','1.432668821136752,103.84202257132415');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y66M','BLK 317 YISHUN AVE 9',28998.1897,46163.9678,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',6,2.15,'N','1.4337649976422107,103.8422882584649');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y67','BLK 269A, 269B YISHUN ST 22',28843.2023,46462.2763,'SURFACE CAR PARK','COUPON PARKING','WHOLE DAY','NO','YES',0,0,'N','1.436462796702931,103.84089555872335');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y68L','BLKS 504A, 504B, 504C, 504D YISHUN ST 51',29142.5387,44394.3419,'SURFACE CAR PARK','ELECTRONIC PARKING','NO','NO','NO',0,4.5,'N','1.4177611354207742,103.843585300165');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y68M','BLK 504 YISHUN ST 51',29255.0052,44464.5975,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',7,2.15,'N','1.418396496978488,103.84459591428735');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y69L','BLKS 513A, 513B, 513C YISHUN ST 51',29107.1794,44173.7841,'SURFACE CAR PARK','ELECTRONIC PARKING','NO','NO','NO',0,4.5,'N','1.4157664916664623,103.84326755705963');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y69M','BLK 513 YISHUN STREET 51',29197.6771,44201.2772,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',6,2.15,'N','1.4160151256928217,103.84408075944808');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y7','BLK 701/716 & 701B YISHUN AVENUE 5',27346.9746,45449.3008,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,0,'N','1.427301817932454,103.82745054301378');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y70M','BLK 506 YISHUN AVE 4',28782.6987,44073.5278,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',16,2.15,'N','1.4148598205777367,103.84035181050739');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y71M','BLK 501 YISHUN ST 51',28844.5948,44263.7102,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',7,2.15,'N','1.4165797598364047,103.84090800664826');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y72M','512 YISHUN STREET 51',28882.336,44065.4057,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',14,2.15,'N','1.4147863643355605,103.8412471384869');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y73M','BLOCK 671 YISHUN AVENUE 4',28917.4786,44546.2792,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',14,2.15,'N','1.4191352096391578,103.84156294080142');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y74M','BLOCK 673 YISHUN AVENUE 4',28931.6439,44600.7404,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',14,2.15,'N','1.4196277366097128,103.84169023040431');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y75M','BLOCK 674 YISHUN AVENUE 4',29086.6991,44661.4096,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',13,2.15,'N','1.42017640145601,103.84308354204482');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y76M','BLOCK 676 YISHUN RING ROAD',28940.4724,44825.8894,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',14,2.15,'N','1.4216639025638345,103.84176956974085');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y77L','BLKS 462A, 462B YISHUN AVENUE 6',29832.1087,45462.7555,'SURFACE CAR PARK','ELECTRONIC PARKING','NO','NO','NO',0,4.5,'N','1.4274234457532677,103.8497817653448');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y77M','BLK 461 YISHUN AVENUE 6',29850.1522,45576.0125,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',10,2.15,'N','1.4284476998889002,103.84994391018637');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y78M','BLK 468 YISHUN ST 43',30057.2209,45166.482,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',4,2.15,'N','1.4247440400013005,103.8518045847139');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y8','BLK 731/746 YISHUN STREET 71,72/AVENUE 5',27772.9219,45686.2734,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.4294449190692644,103.83127807040319');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y82M','BLK 478 YISHUN ST 42',29935.5818,45679.7181,'MULTI-STOREY CAR PARK','ELECTRONIC PARKING','WHOLE DAY','NO','YES',11,2.15,'N','1.4293855700689289,103.85071158132088');"
      );
      tx.executeSql(
        "INSERT INTO cpInfo(car_park_no,address,x_coord,y_coord,car_park_type,type_of_parking_system,short_term_parking,free_parking,night_parking,car_park_decks,gantry_height,car_park_basement,lat_long)" +
          "VALUES('Y9','BLK 747/752 YISHUN STREET 72',28077.2305,45507.8047,'SURFACE CAR PARK','ELECTRONIC PARKING','WHOLE DAY','SUN & PH FR 7AM-10.30PM','YES',0,4.5,'N','1.4278309135192575,103.83401256586953');"
      );
    });
  }
}
