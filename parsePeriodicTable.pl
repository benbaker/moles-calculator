#!/bin/bash

echo "theElements = [";
while read line 
do

   atomicNumber=`echo $line|cut -f1 -d,`;
   atomicMass=`echo $line|cut -f3 -d,`;
   elementName=`echo $line|cut -f4 -d,`;
   symbol=`echo $line|cut -f5 -d,`;
   meltingPoint=`echo $line|cut -f6 -d,`;
   boilingPoint=`echo $line|cut -f7 -d,`;
   density=`echo $line|cut -f8 -d,`;
   crustPercent=`echo $line|cut -f9 -d,`;
   discoveryYear="";
   group=`echo $line|cut -f11 -d,`;
   electronConfiguration=`echo $line|cut -f12 -d,`;
   ionizationEnergy=`echo $line|cut -f13 -d,`;

echo "$symbol = {\"atomicNumber\" : \"$atomicNumber\",\"atomicMass\" :\"$atomicMass\", \"elementName\" : \"$elementName\", \"symbol\" : \"$symbol\", \"meltingPoint\" : \"$meltingPoint\", \"boilingPoint\" : \"$boilingPoint\", \"density\" : \"$density\", \"crustPercent\" : \"$crustPercent\", \"group\" : \"$group\", \"electronConfiguration\" : \"$electronConfiguration\", \"ionizationEnergy\" : \"$ionizationEnergy\"},";

done < elements.csv;
echo "];";
