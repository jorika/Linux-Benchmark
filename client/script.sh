#!/bin/bash
#Requered benchmarks: Geekbench-4, Geekbench-3, Intel Benchmark, and sysbench.
#192.168.1.1 - web server IP address
echo "Please wait...."
green='\033[0;32m'
orange='\033[0;33m'
purple='\033[0;35m'
redecho='\033[0;31m'
mkdir data
sys_SNN=$(dmidecode -t 1 | grep -i serial | sed 's/^.*: //')
nm="$(date "+%y-%m-%d")=$sys_SNN"
mkdir data/$nm/
clear
echo -e "${green}@@@"
echo ""
echo ""
echo ""
echo "Web Benchmark System v1.0 (Build Date: 22/03/2019)"
echo "The test takes at least 20 minutes"
echo "The system will be rebooted automatically"
echo "You can access the data with a browser http://192.168.1.1"
echo ""
echo "orange" > data/$nm/Color.txt
#Input color type
echo -e "${purple}Please enter color:"
echo -e "${orange}Examples: green, rgb(1, 0, 255), or #ff0000"
echo -e "HTML Color Picker:"
echo -e "https://www.w3schools.com/colors/colors_picker.asp"
echo -e "${green}"
read color_charts
echo $color_charts > data/$nm/Color.txt
echo
echo -e "${green}Completed. The Benchmark test takes at least 60 minutes."



rpm -i tools/isgeval-vendor-tools-1.0-1.x86_64.rpm &
wait

tools/Geekbench-3.4.2-Linux/register_linux64 &
wait
tools/Geekbench-3.4.2-Linux/geekbench_x86_64 --no-upload > data/$nm/Geekbench3 &
wait

tools/Geekbench-4.1.0-Linux/register_linux64 &
wait
tools/Geekbench-4.1.0-Linux/geekbench_x86_64 --no-upload > data/$nm/Geekbench4 &
wait

/opt/eval/vendor/bin/run_me > data/$nm/IntelBenchmark &

wait

sysbench --test=cpu –-num-threads=8 -–cpu-max-prime=50000 run > data/$nm/sysbenchMaxPrime &
wait




#echo "*********************************" > data/Data_ExportTime.txt
date "+DATE: %m/%d/%y%nTIME: %H:%M:%S"   > data/Data_ExportTime.txt
#echo "*********************************" >> data/Data_ExportTime.txt
#Intel performance Benchmark *B7ZIP(Compress)* Excel -> Result -> C42
#grep -i 'B7Zip' IntelBenchmark | sed -r 's/.{46}//' | sed -r 's/.{12}$//' > Data_Intel_B7ZIP_Compress.txt
grep -i 'B7Zip' data/$nm/IntelBenchmark | sed -r 's/.{46}//' | sed 's,/,,g' | grep -o '^[^ ]*' | sed 's/[ \t]*$//' | awk '{q=p;p=$0}NR>1{print q}END{ORS = ""; print p}' > data/$nm/Data_Intel_B7ZIP_Compress.txt 

#Intel performance Benchmark *B7ZIP(deCompress)* Excel -> Result -> C43
#grep -i 'B7Zip' IntelBenchmark | sed -r 's/.{58}//' > Data_Intel_B7ZIP_deCompress.txt
grep -i 'B7Zip' data/$nm/IntelBenchmark | sed -r 's/.{46}//' | sed 's,/,,g' | sed -n '/.* /s///p' | sed 's/[ \t]*$//' | awk '{q=p;p=$0}NR>1{print q}END{ORS = ""; print p}' > data/$nm/Data_Intel_B7ZIP_deCompress.txt

#Intel performance Benchmark *p-xml* Excel -> Result -> C38
grep -i 'p_xml' data/$nm/IntelBenchmark | sed -r 's/.{32}//' | sed 's/[ \t]*$//' | awk '{q=p;p=$0}NR>1{print q}END{ORS = ""; print p}' > data/$nm/Data_Intel_p-xml.txt

#Intel performance Benchmark *p-vcf* Excel -> Result -> C39
grep -i 'p_vcf' data/$nm/IntelBenchmark | sed -r 's/.{32}//' | sed 's/[ \t]*$//' | awk '{q=p;p=$0}NR>1{print q}END{ORS = ""; print p}' > data/$nm/Data_Intel_p-vcf.txt

#Intel performance Benchmark *Parallel Sort* Excel -> Result -> C40
grep -i 'parallel' data/$nm/IntelBenchmark | sed -r 's/.{32}//' | sed 's/[ \t]*$//' | awk '{q=p;p=$0}NR>1{print q}END{ORS = ""; print p}' > data/$nm/Data_Intel_Parallel_Sort.txt

#Intel performance Benchmark *erasure* Excel -> Result -> C41
grep -i 'Erasure' data/$nm/IntelBenchmark | sed -r 's/.{32}//' | sed 's/[ \t]*$//'  | awk '{q=p;p=$0}NR>1{print q}END{ORS = ""; print p}' > data/$nm/Data_Intel_erasure.txt

#Geekbench3(SingleCore) Excel -> Result -> C44
#grep -i 'Geekbench Score' Geekbench3 | sed -r 's/.{29}//' | sed -r 's/.{7}$//' > Data_Geekbench3_SingleCore.txt
grep -i 'Geekbench Score' data/$nm/Geekbench3 | sed -r 's/.{29}//' | grep -o '^[^ ]*' | sed 's/[ \t]*$//' | awk '{q=p;p=$0}NR>1{print q}END{ORS = ""; print p}' > data/$nm/Data_Geekbench3_SingleCore.txt

#Geekbench3(SingleCore) *Integer* -> Result -> C45
#grep -i 'Integer Score' Geekbench3 | sed -r 's/.{29}//' | sed -r 's/.{7}$//' > Data_Geekbench3_SingleCore_Integer.txt
grep -i 'Integer Score' data/$nm/Geekbench3 | sed -r 's/.{29}//' | grep -o '^[^ ]*' | sed 's/[ \t]*$//' | awk '{q=p;p=$0}NR>1{print q}END{ORS = ""; print p}' > data/$nm/Data_Geekbench3_SingleCore_Integer.txt

#Geekbench3(SingleCore) *Floatpoint* -> Result -> C46
grep -i 'Floating Point Score' data/$nm/Geekbench3 | sed -r 's/.{29}//' | grep -o '^[^ ]*' | sed 's/[ \t]*$//' | awk '{q=p;p=$0}NR>1{print q}END{ORS = ""; print p}' > data/$nm/Data_Geekbench3_SingleCore_Floating.txt

#Geekbench3(SingleCore) *Memory* -> Result -> c47
grep -i 'Memory Score' data/$nm/Geekbench3 | sed -r 's/.{29}//' | grep -o '^[^ ]*' | sed 's/[ \t]*$//' | awk '{q=p;p=$0}NR>1{print q}END{ORS = ""; print p}' > data/$nm/Data_Geekbench3_SingleCore_Memory.txt

#Geekbench3(MultiCore) Excel -> Result -> C48
#grep -i 'Geekbench Score' Geekbench3 | sed -r 's/.{29}//' | sed -r 's/.{7}$//' > Data_Geekbench3_SingleCore.txt
grep -i 'Geekbench Score' data/$nm/Geekbench3 | sed -r 's/.{29}//' | sed -n '/.* /s///p' | sed 's/[ \t]*$//' | awk '{q=p;p=$0}NR>1{print q}END{ORS = ""; print p}' > data/$nm/Data_Geekbench3_MultiCore.txt

#Geekbench3(MultiCore) *Integer* -> Result -> C49
grep -i 'Integer Score' data/$nm/Geekbench3 | sed -r 's/.{29}//' | sed -n '/.* /s///p'| sed 's/[ \t]*$//' | awk '{q=p;p=$0}NR>1{print q}END{ORS = ""; print p}' > data/$nm/Data_Geekbench3_MultiCore_Integer.txt

#Geekbench3(MultiCore) *Floatpoint* -> Result -> C50
grep -i 'Floating Point Score' data/$nm/Geekbench3 | sed -r 's/.{29}//' | sed -n '/.* /s///p' | sed 's/[ \t]*$//' | awk '{q=p;p=$0}NR>1{print q}END{ORS = ""; print p}' > data/$nm/Data_Geekbench3_MultiCore_Floating.txt

#Geekbench3(MultiCore) *Memory* -> Result -> C51
grep -i 'Memory Score' data/$nm/Geekbench3 | sed -r 's/.{29}//' | sed -n '/.* /s///p' | sed 's/[ \t]*$//' | awk '{q=p;p=$0}NR>1{print q}END{ORS = ""; print p}' > data/$nm/Data_Geekbench3_MultiCore_Memory.txt

#Geekbench4(SingleCore) Excel -> Result -> C52
grep -i 'Single-Core Score' data/$nm/Geekbench4 | sed -n '/.* /s///p' | sed 's/[ \t]*$//' | awk '{q=p;p=$0}NR>1{print q}END{ORS = ""; print p}' > data/$nm/Data_Geekbench4_SingleCore.txt

#Geekbench4(SingleCore) *Crypto Score* Excel -> C53
grep -i 'Crypto Score' data/$nm/Geekbench4 | sed -n 1p | sed -n '/.* /s///p' | sed 's/[ \t]*$//' | awk '{q=p;p=$0}NR>1{print q}END{ORS = ""; print p}' > data/$nm/Data_Geekbench4_SingleCore_CryptoScore.txt

#Geekbench4(SingleCore) *Integer Score* Excel -> C54
grep -i 'Integer Score' data/$nm/Geekbench4 | sed -n 1p | sed -n '/.* /s///p' | sed 's/[ \t]*$//' | awk '{q=p;p=$0}NR>1{print q}END{ORS = ""; print p}' > data/$nm/Data_Geekbench4_SingleCore_IntegerScore.txt

#Geekbench4(SingleCore) *Floatpoint* Excel -> C55
grep -i 'Floating Point Score' data/$nm/Geekbench4 | sed -n 1p | sed -n '/.* /s///p' | sed 's/[ \t]*$//' | awk '{q=p;p=$0}NR>1{print q}END{ORS = ""; print p}' > data/$nm/Data_Geekbench4_SingleCore_Floatpoint.txt

#Geekbench4(SingleCore) *Memory Score* Excel -> C56
grep -i 'Memory Score' data/$nm/Geekbench4 | sed -n 1p | sed -n '/.* /s///p' | sed 's/[ \t]*$//' | awk '{q=p;p=$0}NR>1{print q}END{ORS = ""; print p}' > data/$nm/Data_Geekbench4_SingleCore_MemoryScore.txt

#Geekbench4(MultiCore) Excel -> Result -> C57
grep -i 'Multi-Core Score' data/$nm/Geekbench4 | sed -n '/.* /s///p' | sed 's/[ \t]*$//' | awk '{q=p;p=$0}NR>1{print q}END{ORS = ""; print p}' > data/$nm/Data_Geekbench4_MultiCore.txt

#Geekbench4(MultiCore) *Crypto Score* -> Excel -> Result -> C58
grep -i 'Crypto Score' data/$nm/Geekbench4 | sed -n 2p | sed -n '/.* /s///p' | sed 's/[ \t]*$//' | awk '{q=p;p=$0}NR>1{print q}END{ORS = ""; print p}' > data/$nm/Data_Geekbench4_MultiCore_CryptoScore.txt

#Geekbench4(MultiCore) *Integer Score* -> Excel -> Result -> C59
grep -i 'Integer Score' data/$nm/Geekbench4 | sed -n 2p | sed -n '/.* /s///p' | sed 's/[ \t]*$//' | awk '{q=p;p=$0}NR>1{print q}END{ORS = ""; print p}' > data/$nm/Data_Geekbench4_MultiCore_IntegerScore.txt

#Geekbench4(MultiCore) *Floatpoint* Excel -> Result -> C60
grep -i 'Floating Point Score' data/$nm/Geekbench4 | sed -n 2p | sed -n '/.* /s///p' | sed 's/[ \t]*$//' | awk '{q=p;p=$0}NR>1{print q}END{ORS = ""; print p}' > data/$nm/Data_Geekbench4_MultiCore_Floatpoint.txt

#Geekbench4(MultiCore) *Memory Score* Excel -> Result -> C61
grep -i 'Memory Score' data/$nm/Geekbench4 | sed -n 2p | sed -n '/.* /s///p' | sed 's/[ \t]*$//' | awk '{q=p;p=$0}NR>1{print q}END{ORS = ""; print p}' > data/$nm/Data_Geekbench4_MultiCore_MemoryScore.txt

#sysbench Excel -> Result -> C65
grep -i 'total time' data/$nm/sysbenchMaxPrime | sed -n 1p | sed -n '/.* /s///p' | sed 's/.$//' | sed 's/[ \t]*$//' | awk '{q=p;p=$0}NR>1{print q}END{ORS = ""; print p}' > data/$nm/Data_sysbenchMaxPrime.txt

#Geeks3D Excel -> Result -> B33 (B34)
grep -i 'score: ' data/$nm/_geeks3d_gputest_log | sed -n 2p  | sed -r 's/.{7}//' | grep -o '^[^ ]*' | sed 's/[ \t]*$//' | awk '{q=p;p=$0}NR>1{print q}END{ORS = ""; print p}' > data/$nm/Data_Geeks3D.txt
echo '60000 ms' > data/$nm/Data_Geeks3DTime.txt

#Geekbench3 -> Result -> B44,B48
cat data/$nm/Geekbench3 | head -1 | grep -o '^[^:]*' | sed 's/[ \t]*$//' | awk '{q=p;p=$0}NR>1{print q}END{ORS = ""; print p}' > data/$nm/Data_Geekbench3v.txt

#Geekbench4 -> Result -> B52,B57
cat data/$nm/Geekbench4 | head -1 | grep -o '^[^:]*' | sed 's/[ \t]*$//' | awk '{q=p;p=$0}NR>1{print q}END{ORS = ""; print p}' > data/$nm/Data_Geekbench4v.txt

green='\033[0;32m'
orange='\033[0;33m'
purple='\033[0;35m'
redecho='\033[0;31m'
echo -e "${green}@@@"
echo
echo -e "${purple}Version 1.0 22/03/2019"
date
echo
#Check the files
if [ -e data/$nm/Geekbench3 ]
then
echo -e "${green}Geekbench3 		 - 			ok"
else
echo -e "${redecho}Geekbench3 - not found. Benchmark data will be 0."
fi
if [ -e data/$nm/Geekbench4 ]
then
echo -e "${green}Geekbench4 		 - 			ok"
else
echo -e "${redecho}Geekbench4 - not found. Benchmark data will be 0."
fi
if [ -e data/$nm/IntelBenchmark ]
then
echo -e "${green}IntelBenchmark 		 - 			ok"
else
echo -e "${redecho}IntelBenchmark - not found. Benchmark data will be 0."
fi
if [ -e data/$nm/sysbenchMaxPrime ]
then
echo -e "${green}sysbenchMaxPrime 	 - 			ok"
else
echo -e "${redecho}sysbenchMaxPrime - not found. Benchmark data will be 0."
fi
if [ -e data/$nm/_geeks3d_gputest_log ]
then
echo -e "${green}Geeks3DBenchmark 	 - 			ok"
else
echo -e "${redecho}Geeks3DBenchmark - not found. Benchmark data will be 0."
fi
echo

echo -e "${green}Completed. All data saved."

mount 192.168.1.1:/var/www/html/database /mnt/line
sleep 10
mkdir /mnt/line/$nm
cp -r data/$nm/ /mnt/line/$nm/
sleep 10
umount /mnt/line
sleep 10
reboot
