//Data
const $header = document.getElementById('header');
const $container = document.getElementById('container');
const $footer = document.getElementById('footer');
const $emojis = ['&#129409 129409', '&#8986 8986','&#8987 8987', '&#9193 9193','&#9194 9194','&#9195 9195','&#9196 9196','&#9197 9197','&#9198 9198', '&#9199 9199', '&#9200 9200','&#9201 9201','&#9202 9202','&#9203 9203','&#9208 9208','&#9209 9209','&#9210 9210', '&#9410 9410','&#9748 9748','&#9749 9749','&#9757 9757','&#9800 9800','&#9801 9801','&#9802 9802','&#9803 9803','&#9804 9804','&#9805 9805','&#9806 9806','&#9807 9807','&#9808 9808','&#9809 9809','&#9810 9810','&#9811 9811','&#9823 9823','&#9855 9855','&#9875 9875','&#9889 9889','&#9898 9898','&#9899 9899','&#9917 9917','&#9918 9918','&#9924 9924','&#9925 9925','&#9934 9934','&#9935 9935','&#9937 9937','&#9939 9939','&#9940 9940','&#9961 9961','&#9962 9962','&#9968 9968', '&#9969 9969', '&#9970 9970', '&#9971 9971', '&#9972 9972','&#9973 9973','&#9975 9975','&#9976 9976','&#9977 9977','&#9978 9978','&#9981 9981','&#9986 9986','&#9989 9989','&#9992 9992','&#9993 9993','&#9994 9994','&#9995 9995','&#9996 9996','&#9997 9997','&#1004 1004','&#1006 1006','&#10013 10013','&#10017 10017','&#10024 10024','&#10035 10035','&#10036 10036','&#10052 10052','&#10055 10055','&#10060 10060','&#10062 10062','&#10067 10067','&#10069 10069','&#1071 1071','&#10083 10083','&#10084 10084','&#10133 10133','&#10134 10134','&#10135 10135','&#10145 10145','&#11013 11013','&#11014 11014', '&#11015 11015','&#11035 11035','&#11036 11036','&#11088 11088','&#11093 11093','&#127374 127374','&#127377 127377','&#127378 127378','&#12379 12379'];



//Code

//Run
// for loop
for (let i=0; i < 100; i++){
  $container.innerHTML = $emojis.join(' | ');
  console.log($emojis[i]);
 
}


//header and footer text
$header.innerHTML = 'Emoji Gallery';
$footer.innerHTML += '&copy 2021 Ben Grant';