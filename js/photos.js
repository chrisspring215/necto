// Master list of club videos posted on Youtube
var photosFactory = [
'IMG_9009.JPG','IMG_9020.JPG','IMG_9040.JPG','IMG_9059.JPG','IMG_9073.JPG','IMG_9010.JPG','IMG_9021.JPG','IMG_9043.JPG','IMG_9060.JPG','IMG_9076.JPG','IMG_9011.JPG','IMG_9022.JPG','IMG_9045.JPG','IMG_9061.JPG','IMG_9077.JPG','IMG_9012.JPG','IMG_9023.JPG','IMG_9046.JPG','IMG_9063.JPG','IMG_9078.JPG','IMG_9013.JPG','IMG_9024.JPG','IMG_9047.JPG','IMG_9064.JPG','IMG_9079.JPG','IMG_9014.JPG','IMG_9025.JPG','IMG_9048.JPG','IMG_9066.JPG','IMG_9081.JPG','IMG_9015.JPG','IMG_9026.JPG','IMG_9051.JPG','IMG_9067.JPG','IMG_9082.JPG','IMG_9016.JPG','IMG_9027.JPG','IMG_9052.JPG','IMG_9068.JPG','IMG_9083.JPG','IMG_9017.JPG','IMG_9028.JPG','IMG_9053.JPG','IMG_9070.JPG','IMG_9084.JPG','IMG_9018.JPG','IMG_9030.JPG','IMG_9054.JPG','IMG_9071.JPG','IMG_9086.JPG','IMG_9019.JPG','IMG_9031.JPG','IMG_9058.JPG','IMG_9072.JPG','IMG_9087.JPG', 'necto-factory-1.jpg', 'necto-factory-10.jpg', 'necto-factory-100.jpg', 'necto-factory-101.jpg', 'necto-factory-102.jpg', 'necto-factory-103.jpg', 'necto-factory-104.jpg', 'necto-factory-105.jpg', 'necto-factory-106.jpg', 'necto-factory-107.jpg', 'necto-factory-108.jpg', 'necto-factory-109.jpg', 'necto-factory-11.jpg', 'necto-factory-110.jpg', 'necto-factory-111.jpg', 'necto-factory-112.jpg', 'necto-factory-113.jpg', 'necto-factory-114.jpg', 'necto-factory-115.jpg', 'necto-factory-116.jpg', 'necto-factory-117.jpg', 'necto-factory-118.jpg', 'necto-factory-119.jpg', 'necto-factory-12.jpg', 'necto-factory-120.jpg', 'necto-factory-121.jpg', 'necto-factory-122.jpg', 'necto-factory-123.jpg', 'necto-factory-124.jpg', 'necto-factory-125.jpg', 'necto-factory-126.jpg', 'necto-factory-127.jpg', 'necto-factory-128.jpg', 'necto-factory-129.jpg', 'necto-factory-13.jpg', 'necto-factory-130.jpg', 'necto-factory-131.jpg', 'necto-factory-132.jpg', 'necto-factory-133.jpg', 'necto-factory-134.jpg', 'necto-factory-135.jpg', 'necto-factory-136.jpg', 'necto-factory-137.jpg', 'necto-factory-138.jpg', 'necto-factory-139.jpg', 'necto-factory-14.jpg', 'necto-factory-140.jpg', 'necto-factory-141.jpg', 'necto-factory-142.jpg', 'necto-factory-143.jpg', 'necto-factory-144.jpg', 'necto-factory-145.jpg', 'necto-factory-146.jpg', 'necto-factory-147.jpg', 'necto-factory-148.jpg', 'necto-factory-15.jpg', 'necto-factory-16.jpg', 'necto-factory-17.jpg', 'necto-factory-18.jpg', 'necto-factory-19.jpg', 'necto-factory-2.jpg', 'necto-factory-20.jpg', 'necto-factory-21.jpg', 'necto-factory-22.jpg', 'necto-factory-23.jpg', 'necto-factory-24.jpg', 'necto-factory-25.jpg', 'necto-factory-26.jpg', 'necto-factory-27.jpg', 'necto-factory-28.jpg', 'necto-factory-29.jpg', 'necto-factory-3.jpg', 'necto-factory-30.jpg', 'necto-factory-31.jpg', 'necto-factory-32.jpg', 'necto-factory-33.jpg', 'necto-factory-34.jpg', 'necto-factory-35.jpg', 'necto-factory-36.jpg', 'necto-factory-37.jpg', 'necto-factory-38.jpg', 'necto-factory-39.jpg', 'necto-factory-4.jpg', 'necto-factory-40.jpg', 'necto-factory-41.jpg', 'necto-factory-42.jpg', 'necto-factory-43.jpg', 'necto-factory-44.jpg', 'necto-factory-45.jpg', 'necto-factory-46.jpg', 'necto-factory-47.jpg', 'necto-factory-48.jpg', 'necto-factory-49.jpg', 'necto-factory-5.jpg', 'necto-factory-50.jpg', 'necto-factory-51.jpg', 'necto-factory-52.jpg', 'necto-factory-53.jpg', 'necto-factory-54.jpg', 'necto-factory-55.jpg', 'necto-factory-56.jpg', 'necto-factory-57.jpg', 'necto-factory-58.jpg', 'necto-factory-59.jpg', 'necto-factory-6.jpg', 'necto-factory-60.jpg', 'necto-factory-61.jpg', 'necto-factory-62.jpg', 'necto-factory-63.jpg', 'necto-factory-64.jpg', 'necto-factory-65.jpg', 'necto-factory-66.jpg', 'necto-factory-67.jpg', 'necto-factory-68.jpg', 'necto-factory-69.jpg', 'necto-factory-7.jpg', 'necto-factory-70.jpg', 'necto-factory-71.jpg', 'necto-factory-72.jpg', 'necto-factory-73.jpg', 'necto-factory-74.jpg', 'necto-factory-75.jpg', 'necto-factory-76.jpg', 'necto-factory-77.jpg', 'necto-factory-78.jpg', 'necto-factory-79.jpg', 'necto-factory-8.jpg', 'necto-factory-80.jpg', 'necto-factory-81.jpg', 'necto-factory-82.jpg', 'necto-factory-83.jpg', 'necto-factory-84.jpg', 'necto-factory-85.jpg', 'necto-factory-86.jpg', 'necto-factory-87.jpg', 'necto-factory-88.jpg', 'necto-factory-89.jpg', 'necto-factory-9.jpg', 'necto-factory-90.jpg', 'necto-factory-91.jpg', 'necto-factory-92.jpg', 'necto-factory-93.jpg', 'necto-factory-94.jpg', 'necto-factory-95.jpg', 'necto-factory-96.jpg', 'necto-factory-97.jpg', 'necto-factory-98.jpg', 'necto-factory-99.jpg', 
];

var photosMix = [
    '1.JPG','12184054_10153079369846230_2589459083081841674_o.jpg','12184323_10153079366691230_7950293210365042243_o.jpg','12186298_10153079363221230_4746671938029978720_o.jpg','12771577_10153249767761230_3358185486170017253_o.jpg','12771619_10153249768006230_399765856042110070_o.jpg','13040974_10153385912696230_8693750457898196689_o.jpg','2.JPG','3.jpg','5.JPG','AFC_8486.jpg','AFC_8502.jpg','AFC_8613.jpg','AFC_8632.jpg','AFC_8649.jpg','AFC_8671.jpg','AFC_8732.jpg','AFC_8747.jpg','AFC_8781.jpg','AFC_8786.jpg','AFC_8923.jpg','AFC_9073.jpg','AFC_9202.jpg','AFC_9232.jpg','IMG_0013.JPG','IMG_0014.JPG','IMG_0015.JPG','IMG_0016.JPG','IMG_0017.JPG','IMG_0037.JPG','IMG_0040.JPG','IMG_0041.JPG','IMG_7321.JPG','IMG_7325.JPG','IMG_7331.JPG','IMG_7332.JPG','IMG_7333.JPG','IMG_7335.JPG','IMG_7385.JPG','IMG_7386.JPG','IMG_7392.JPG','IMG_7393.JPG','IMG_8865.JPG','IMG_8866.JPG','IMG_8867.JPG','IMG_8868.JPG','IMG_8869.JPG','IMG_8871.JPG','IMG_8873.JPG','IMG_8930.JPG','IMG_8931.JPG','IMG_8932.JPG','IMG_8933.JPG','IMG_8934.JPG','IMG_8935.JPG','IMG_8936.JPG','IMG_8937.JPG','necto-boogie-t-001.jpg','necto-boogie-t-002.jpg','necto-boogie-t-003.jpg','necto-boogie-t-005.jpg','necto-boogie-t-006.jpg','necto-boogie-t-007.jpg','necto-boogie-t-008.jpg','necto-boogie-t-009.jpg','necto-boogie-t-010.jpg','necto-boogie-t-011.jpg','necto-boogie-t-012.jpg','necto-boogie-t-013.jpg','necto-boogie-t-014.jpg','necto-boogie-t-015.jpg','necto-boogie-t-016.jpg','necto-boogie-t-017.jpg','necto-boogie-t-018.jpg','necto-boogie-t-019.jpg','necto-boogie-t-020.jpg','necto-boogie-t-021.jpg','necto-boogie-t-022.jpg','necto-boogie-t-023.jpg','necto-boogie-t-024.jpg','necto-boogie-t-025.jpg','necto-boogie-t-026.jpg','necto-boogie-t-027.jpg','necto-boogie-t-028.jpg','necto-boogie-t-029.jpg','necto-boogie-t-030.jpg','necto-boogie-t-031.jpg','necto-boogie-t-032.jpg','necto-boogie-t-033.jpg','necto-boogie-t-034.jpg','necto-boogie-t-035.jpg','necto-boogie-t-036.jpg','necto-boogie-t-037.jpg','necto-boogie-t-038.jpg','necto-boogie-t-039.jpg','necto-boogie-t-040.jpg','necto-boogie-t-041.jpg','necto-boogie-t-042.jpg','necto-boogie-t-043.jpg','necto-boogie-t-044.jpg','necto-boogie-t-045.jpg','necto-boogie-t-046.jpg','necto-boogie-t-047.jpg','necto-boogie-t-048.jpg','necto-boogie-t-050.jpg','necto-boogie-t-051.jpg','necto-boogie-t-052.jpg','necto-boogie-t-053.jpg','necto-boogie-t-054.jpg','necto-boogie-t-055.jpg','necto-boogie-t-056.jpg','necto-boogie-t-057.jpg','necto-boogie-t-058.jpg','necto-boogie-t-059.jpg','necto-boogie-t-060.jpg','necto-boogie-t-061.jpg','necto-boogie-t-062.jpg','necto-boogie-t-063.jpg','necto-boogie-t-064.jpg','necto-boogie-t-065.jpg','necto-boogie-t-066.jpg','necto-boogie-t-067.jpg','necto-boogie-t-068.jpg','necto-boogie-t-069.jpg','necto-boogie-t-070.jpg','necto-boogie-t-071.jpg','necto-boogie-t-072.jpg','necto-boogie-t-073.jpg','necto-boogie-t-074.jpg','necto-boogie-t-075.jpg','necto-boogie-t-076.jpg','necto-boogie-t-077.jpg','necto-boogie-t-078.jpg','necto-boogie-t-079.jpg','necto-boogie-t-080.jpg','necto-boogie-t-081.jpg','necto-boogie-t-082.jpg','necto-boogie-t-083.jpg','necto-boogie-t-084.jpg','necto-boogie-t-085.jpg','necto-boogie-t-086.jpg','necto-boogie-t-087.jpg','necto-boogie-t-088.jpg','necto-boogie-t-089.jpg','necto-boogie-t-090.jpg','necto-boogie-t-091.jpg','necto-boogie-t-092.jpg','necto-boogie-t-093.jpg','necto-boogie-t-094.jpg','necto-boogie-t-095.jpg','necto-boogie-t-096.jpg','necto-boogie-t-097.jpg','necto-boogie-t-098.jpg','necto-boogie-t-099.jpg','necto-boogie-t-100.jpg','necto-boogie-t-101.jpg','necto-boogie-t-102.jpg',
];

var photosPride = [
    '1.JPG','IMG_9122.JPG','1520797_10151828632866230_513942927_n.jpg','IMG_9123.JPG','IMG_8875.JPG','IMG_9124.JPG','IMG_8876.JPG','IMG_9125.JPG','IMG_8877.JPG','IMG_9126.JPG','IMG_8878.JPG','IMG_9127.JPG','IMG_8879.JPG','IMG_9128.JPG','IMG_8880.JPG','IMG_9129.JPG','IMG_8882.JPG','IMG_9130.JPG','IMG_8883.JPG','IMG_9131.JPG','IMG_8884.JPG','IMG_9133.JPG','IMG_8885.JPG','IMG_9134.JPG','IMG_8886.JPG','IMG_9135.JPG','IMG_8887.JPG','IMG_9136.JPG','IMG_8888.JPG','IMG_9137.JPG','IMG_8889.JPG','IMG_9138.JPG','IMG_8890.JPG','IMG_9139.JPG','IMG_8891.JPG','IMG_9140.JPG','IMG_9088.JPG','IMG_9141.JPG','IMG_9089.JPG','IMG_9142.JPG','IMG_9091.JPG','IMG_9143.JPG','IMG_9092.JPG','IMG_9144.JPG','IMG_9093.JPG','IMG_9145.JPG','IMG_9094.JPG','IMG_9146.JPG','IMG_9095.JPG','IMG_9147.JPG','IMG_9096.JPG','IMG_9148.JPG','IMG_9097.JPG','IMG_9149.JPG','IMG_9098.JPG','IMG_9150.JPG','IMG_9100.JPG','IMG_9151.JPG','IMG_9101.JPG','IMG_9152.JPG','IMG_9102.JPG','IMG_9153.JPG','IMG_9103.JPG','IMG_9154.JPG','IMG_9104.JPG','IMG_9155.JPG','IMG_9106.JPG','IMG_9156.JPG','IMG_9107.JPG','IMG_9157.JPG','IMG_9108.JPG','IMG_9158.JPG','IMG_9109.JPG','IMG_9159.JPG','IMG_9110.JPG','IMG_9160.JPG','IMG_9111.JPG','IMG_9161.JPG','IMG_9112.JPG','IMG_9168.JPG','IMG_9113.JPG','IMG_9169.JPG','IMG_9114.JPG','IMG_9170.JPG','IMG_9115.JPG','IMG_9171.JPG','IMG_9116.JPG','IMG_9172.JPG','IMG_9117.JPG','IMG_9173.JPG','IMG_9118.JPG','IMG_9174.JPG','IMG_9120.JPG','IMG_9175.JPG','IMG_9121.JPG', 'pride_a001.jpg', 'pride_a002.jpg', 'pride_a003.jpg', 'pride_a005.jpg', 'pride_a006.jpg', 'pride_a007.jpg', 'necto-pride-1.jpg', 'necto-pride-10.jpg', 'necto-pride-11.jpg', 'necto-pride-12.jpg', 'necto-pride-13.jpg', 'necto-pride-14.jpg', 'necto-pride-15.jpg', 'necto-pride-16.jpg', 'necto-pride-17.jpg', 'necto-pride-18.jpg', 'necto-pride-19.jpg', 'necto-pride-2.jpg', 'necto-pride-20.jpg', 'necto-pride-21.jpg', 'necto-pride-22.jpg', 'necto-pride-23.jpg', 'necto-pride-24.jpg', 'necto-pride-25.jpg', 'necto-pride-26.jpg', 'necto-pride-27.jpg', 'necto-pride-28.jpg', 'necto-pride-29.jpg', 'necto-pride-3.jpg', 'necto-pride-30.jpg', 'necto-pride-31.jpg', 'necto-pride-32.jpg', 'necto-pride-33.jpg', 'necto-pride-34.jpg', 'necto-pride-35.jpg', 'necto-pride-36.jpg', 'necto-pride-37.jpg', 'necto-pride-38.jpg', 'necto-pride-39.jpg', 'necto-pride-4.jpg', 'necto-pride-40.jpg', 'necto-pride-41.jpg', 'necto-pride-42.jpg', 'necto-pride-43.jpg', 'necto-pride-44.jpg', 'necto-pride-45.jpg', 'necto-pride-46.jpg', 'necto-pride-47.jpg', 'necto-pride-48.jpg', 'necto-pride-49.jpg', 'necto-pride-5.jpg', 'necto-pride-50.jpg', 'necto-pride-51.jpg', 'necto-pride-52.jpg', 'necto-pride-53.jpg', 'necto-pride-54.jpg', 'necto-pride-55.jpg', 'necto-pride-56.jpg', 'necto-pride-57.jpg', 'necto-pride-58.jpg', 'necto-pride-59.jpg', 'necto-pride-6.jpg', 'necto-pride-60.jpg', 'necto-pride-61.jpg', 'necto-pride-62.jpg', 'necto-pride-63.jpg', 'necto-pride-64.jpg', 'necto-pride-65.jpg', 'necto-pride-66.jpg', 'necto-pride-67.jpg', 'necto-pride-68.jpg', 'necto-pride-69.jpg', 'necto-pride-7.jpg', 'necto-pride-70.jpg', 'necto-pride-71.jpg', 'necto-pride-72.jpg', 'necto-pride-73.jpg', 'necto-pride-74.jpg', 'necto-pride-75.jpg', 'necto-pride-76.jpg', 'necto-pride-77.jpg', 'necto-pride-78.jpg', 'necto-pride-79.jpg', 'necto-pride-8.jpg', 'necto-pride-80.jpg', 'necto-pride-81.jpg', 'necto-pride-82.jpg', 'necto-pride-83.jpg', 'necto-pride-84.jpg', 'necto-pride-85.jpg', 'necto-pride-86.jpg', 'necto-pride-87.jpg', 'necto-pride-88.jpg', 'necto-pride-89.jpg', 'necto-pride-9.jpg', 'necto-pride-90.jpg', 'necto-pride-91.jpg', 'necto-pride-92.jpg', 'necto-pride-93.jpg', 'necto-pride-94.jpg', 'necto-pride-95.jpg', 'necto-pride-96.jpg',
];

var photosFrequency = [
    '1.jpg','10494396_10152226446931230_3522937357315790997_o.jpg','10714106_10152350125516230_7594195452783994197_o.jpg','1184933_10151569524061230_1448342399_n.jpg','1234786_10151602006236230_537832335_n.jpg','13002539_10153372945491230_7792885413393377558_o.jpg','1450196_10151696877556230_1249836202_n.jpg','1547993_10152226446881230_5349320145577661395_o.jpg','1617702_10152284310761230_2665471686068889162_o.jpg','1962135_10152385027396230_3865097830303478961_o.jpg','534978_10151359686866230_1073888898_n.jpg','DSC_1528.jpg','DSC_2704.jpg','IMG_8938.JPG','IMG_8939.JPG','IMG_8940.JPG','IMG_8941.JPG','IMG_8942.JPG','IMG_8943.JPG','IMG_8944.JPG','IMG_8945.JPG','IMG_8946.JPG','IMG_8947.JPG','IMG_8948.JPG','IMG_8949.JPG','IMG_8951.JPG','IMG_8952.JPG','IMG_8953.JPG','IMG_8954.JPG','IMG_8955.JPG','IMG_8956.JPG','IMG_8957.JPG','IMG_8958.JPG','IMG_8959.JPG','IMG_8960.JPG','IMG_8961.JPG','IMG_8962.JPG','IMG_8963.JPG','IMG_8964.JPG','IMG_8965.JPG','IMG_8966.JPG','IMG_8967.JPG','IMG_8968.JPG','IMG_8969.JPG','IMG_8970.JPG','IMG_8971.JPG','IMG_8972.JPG','IMG_8973.JPG','IMG_8974.JPG','IMG_8975.JPG','IMG_8976.JPG','IMG_8978.JPG','IMG_8979.JPG','IMG_8980.JPG','IMG_8981.JPG','IMG_8983.JPG','IMG_8984.JPG','IMG_8985.JPG','IMG_8986.JPG','IMG_8987.JPG','IMG_8989.JPG','IMG_8990.JPG','IMG_8991.JPG','IMG_8992.JPG','IMG_8993.JPG','IMG_8994.JPG','IMG_8995.JPG','IMG_8996.JPG','IMG_8997.JPG','IMG_8998.JPG','IMG_8999.JPG','IMG_9001.JPG','IMG_9002.JPG','IMG_9003.JPG','IMG_9004.JPG','IMG_9005.JPG','IMG_9006.JPG','IMG_9007.JPG','IMG_9008.JPG','IMG_9098.JPG','IMG_9101.JPG', 'necto-frequency-1.jpg', 'necto-frequency-10.jpg', 'necto-frequency-100.jpg', 'necto-frequency-101.jpg', 'necto-frequency-102.jpg', 'necto-frequency-103.jpg', 'necto-frequency-104.jpg', 'necto-frequency-105.jpg', 'necto-frequency-106.jpg', 'necto-frequency-107.jpg', 'necto-frequency-108.jpg', 'necto-frequency-11.jpg', 'necto-frequency-12.jpg', 'necto-frequency-13.jpg', 'necto-frequency-14.jpg', 'necto-frequency-15.jpg', 'necto-frequency-16.jpg', 'necto-frequency-17.jpg', 'necto-frequency-18.jpg', 'necto-frequency-19.jpg', 'necto-frequency-2.jpg', 'necto-frequency-20.jpg', 'necto-frequency-21.jpg', 'necto-frequency-22.jpg', 'necto-frequency-23.jpg', 'necto-frequency-24.jpg', 'necto-frequency-25.jpg', 'necto-frequency-26.jpg', 'necto-frequency-27.jpg', 'necto-frequency-28.jpg', 'necto-frequency-29.jpg', 'necto-frequency-3.jpg', 'necto-frequency-30.jpg', 'necto-frequency-31.jpg', 'necto-frequency-32.jpg', 'necto-frequency-33.jpg', 'necto-frequency-34.jpg', 'necto-frequency-35.jpg', 'necto-frequency-36.jpg', 'necto-frequency-37.jpg', 'necto-frequency-38.jpg', 'necto-frequency-39.jpg', 'necto-frequency-4.jpg', 'necto-frequency-40.jpg', 'necto-frequency-41.jpg', 'necto-frequency-42.jpg', 'necto-frequency-43.jpg', 'necto-frequency-44.jpg', 'necto-frequency-45.jpg', 'necto-frequency-46.jpg', 'necto-frequency-47.jpg', 'necto-frequency-48.jpg', 'necto-frequency-49.jpg', 'necto-frequency-5.jpg', 'necto-frequency-50.jpg', 'necto-frequency-51.jpg', 'necto-frequency-52.jpg', 'necto-frequency-53.jpg', 'necto-frequency-54.jpg', 'necto-frequency-55.jpg', 'necto-frequency-56.jpg', 'necto-frequency-57.jpg', 'necto-frequency-58.jpg', 'necto-frequency-59.jpg', 'necto-frequency-6.jpg', 'necto-frequency-60.jpg', 'necto-frequency-61.jpg', 'necto-frequency-62.jpg', 'necto-frequency-63.jpg', 'necto-frequency-64.jpg', 'necto-frequency-65.jpg', 'necto-frequency-66.jpg', 'necto-frequency-67.jpg', 'necto-frequency-68.jpg', 'necto-frequency-69.jpg', 'necto-frequency-7.jpg', 'necto-frequency-70.jpg', 'necto-frequency-71.jpg', 'necto-frequency-72.jpg', 'necto-frequency-73.jpg', 'necto-frequency-74.jpg', 'necto-frequency-75.jpg', 'necto-frequency-76.jpg', 'necto-frequency-77.jpg', 'necto-frequency-78.jpg', 'necto-frequency-79.jpg', 'necto-frequency-8.jpg', 'necto-frequency-80.jpg', 'necto-frequency-81.jpg', 'necto-frequency-82.jpg', 'necto-frequency-83.jpg', 'necto-frequency-84.jpg', 'necto-frequency-85.jpg', 'necto-frequency-86.jpg', 'necto-frequency-87.jpg', 'necto-frequency-88.jpg', 'necto-frequency-89.jpg', 'necto-frequency-9.jpg', 'necto-frequency-90.jpg', 'necto-frequency-91.jpg', 'necto-frequency-92.jpg', 'necto-frequency-93.jpg', 'necto-frequency-94.jpg', 'necto-frequency-95.jpg', 'necto-frequency-96.jpg', 'necto-frequency-97.jpg', 'necto-frequency-98.jpg', 'necto-frequency-99.jpg',
];

//Populates videos on the Weekly event pages
function populateWeeklyPhotos(day) {
        
    var numOfPhotos;
    var photoPool;
    var photoDayPath;

    /* mon */ if (day === 1) { numOfPhotos = photosFactory.length;   photoPool = photosFactory;   photoDayPath = '/photos-factory/'};
    /* thr  */if (day === 4) { numOfPhotos = photosMix.length;       photoPool = photosMix;       photoDayPath = '/photos-mix/'};
    /* fri */ if (day === 5) { numOfPhotos = photosPride.length;     photoPool = photosPride;     photoDayPath = '/photos-pride/'};
    /* sat */ if (day === 6) { numOfPhotos = photosFrequency.length; photoPool = photosFrequency; photoDayPath = '/photos-frequency/'};

    document.getElementById('weekly-photo-1').setAttribute('src', ('img/weekly-photos' + photoDayPath + 'thumbs/' + photoPool[Math.floor(Math.random() * numOfPhotos)].split('.').join('_tn.')));
    document.getElementById('weekly-photo-2').setAttribute('src', ('img/weekly-photos' + photoDayPath + 'thumbs/' + photoPool[Math.floor(Math.random() * numOfPhotos)].split('.').join('_tn.')));
    document.getElementById('weekly-photo-3').setAttribute('src', ('img/weekly-photos' + photoDayPath + 'thumbs/' + photoPool[Math.floor(Math.random() * numOfPhotos)].split('.').join('_tn.')));
    document.getElementById('weekly-photo-4').setAttribute('src', ('img/weekly-photos' + photoDayPath + 'thumbs/' + photoPool[Math.floor(Math.random() * numOfPhotos)].split('.').join('_tn.')));


    function test() {
		for (var i = 1; i <= 4; i++) {


			if (document.getElementById('weekly-photo-' + i).height > document.getElementById('weekly-photo-' + i).width) {
				document.getElementById('weekly-photo-' + i).setAttribute('src', ('img/weekly-photos' + photoDayPath + photoPool[Math.floor(Math.random() * numOfPhotos)]));
				test()
			}

			else {
				
			}
	    } 
	}
    test()
}

function populateWeeklyPhotosAll(day) {

    var weeklyPhotoGrid = document.getElementById('weeklyPhotoGrid');
    var numOfPhotos;
    var photoPool;
    var photoDayPath;
    var dayAltText;

    /* mon */ if (day === 1) { numOfPhotos = photosFactory.length;   photoPool = photosFactory;   photoDayPath = '/photos-factory/';    dayAltText = 'Factory Monday'};
    /* thr  */if (day === 4) { numOfPhotos = photosMix.length;       photoPool = photosMix;       photoDayPath = '/photos-mix/';        dayAltText = 'Mix Thursday'};
    /* fri */ if (day === 5) { numOfPhotos = photosPride.length;     photoPool = photosPride;     photoDayPath = '/photos-pride/';      dayAltText = 'Pride Friday'};
    /* sat */ if (day === 6) { numOfPhotos = photosFrequency.length; photoPool = photosFrequency; photoDayPath = '/photos-frequency/';  dayAltText = 'Frequency Saturday'};

    for (var i = 0; i <= numOfPhotos - 1; i++) {
        weeklyPhotoGrid.innerHTML = weeklyPhotoGrid.innerHTML + ('<div class="col col-6-xs col-2-md"><a href="' + 'img/weekly-photos' + photoDayPath + photoPool[i] + '"><img style="display: block;" src="img/weekly-photos' + photoDayPath + 'thumbs/' + photoPool[i].split('.').join('_tn.') + '" alt="A photo from ' + dayAltText + ' , a weekly event at the Necto Nightclub in Ann Arbor, Michigan." title="A photo from ' + dayAltText + ', a weekly event at the Necto Nightclub in Ann Arbor, Michigan."></div>');
    }

}