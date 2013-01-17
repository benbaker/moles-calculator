
var theElements = [
H = {"atomicNumber" : "1","atomicMass" :"1.0079", "elementName" : "Hydrogen", "symbol" : "H", "meltingPoint" : "-259", "boilingPoint" : "-253", "density" : "0.09", "crustPercent" : "0.14", "group" : "1", "electronConfiguration" : "1s1", "ionizationEnergy" : "13.5984"},
He = {"atomicNumber" : "2","atomicMass" :"4.0026", "elementName" : "Helium", "symbol" : "He", "meltingPoint" : "-272", "boilingPoint" : "-269", "density" : "0.18", "crustPercent" : "", "group" : "18", "electronConfiguration" : "1s2", "ionizationEnergy" : "24.5874"},
Li = {"atomicNumber" : "3","atomicMass" :"6.941", "elementName" : "Lithium", "symbol" : "Li", "meltingPoint" : "180", "boilingPoint" : "1347", "density" : "0.53", "crustPercent" : "", "group" : "1", "electronConfiguration" : "[He] 2s1", "ionizationEnergy" : "5.3917"},
Be = {"atomicNumber" : "4","atomicMass" :"9.0122", "elementName" : "Beryllium", "symbol" : "Be", "meltingPoint" : "1278", "boilingPoint" : "2970", "density" : "1.85", "crustPercent" : "", "group" : "2", "electronConfiguration" : "[He] 2s2", "ionizationEnergy" : "9.3227"},
B = {"atomicNumber" : "5","atomicMass" :"10.811", "elementName" : "Boron", "symbol" : "B", "meltingPoint" : "2300", "boilingPoint" : "2550", "density" : "2.34", "crustPercent" : "", "group" : "13", "electronConfiguration" : "[He] 2s2á2p1", "ionizationEnergy" : "8.298"},
C = {"atomicNumber" : "6","atomicMass" :"12.0107", "elementName" : "Carbon", "symbol" : "C", "meltingPoint" : "3500", "boilingPoint" : "4827", "density" : "2.26", "crustPercent" : "0.094", "group" : "14", "electronConfiguration" : "[He] 2s2á2p2", "ionizationEnergy" : "11.2603"},
N = {"atomicNumber" : "7","atomicMass" :"14.0067", "elementName" : "Nitrogen", "symbol" : "N", "meltingPoint" : "-210", "boilingPoint" : "-196", "density" : "1.25", "crustPercent" : "", "group" : "15", "electronConfiguration" : "[He] 2s2á2p3", "ionizationEnergy" : "14.5341"},
O = {"atomicNumber" : "8","atomicMass" :"15.9994", "elementName" : "Oxygen", "symbol" : "O", "meltingPoint" : "-218", "boilingPoint" : "-183", "density" : "1.43", "crustPercent" : "46.71", "group" : "16", "electronConfiguration" : "[He] 2s2á2p4", "ionizationEnergy" : "13.6181"},
F = {"atomicNumber" : "9","atomicMass" :"18.9984", "elementName" : "Fluorine", "symbol" : "F", "meltingPoint" : "-220", "boilingPoint" : "-188", "density" : "1.7", "crustPercent" : "0.029", "group" : "17", "electronConfiguration" : "[He] 2s2á2p5", "ionizationEnergy" : "17.4228"},
Ne = {"atomicNumber" : "10","atomicMass" :"20.1797", "elementName" : "Neon", "symbol" : "Ne", "meltingPoint" : "-249", "boilingPoint" : "-246", "density" : "0.9", "crustPercent" : "", "group" : "18", "electronConfiguration" : "[He] 2s2á2p6", "ionizationEnergy" : "21.5645"},
Na = {"atomicNumber" : "11","atomicMass" :"22.9897", "elementName" : "Sodium", "symbol" : "Na", "meltingPoint" : "98", "boilingPoint" : "883", "density" : "0.97", "crustPercent" : "2.75", "group" : "1", "electronConfiguration" : "[Ne] 3s1", "ionizationEnergy" : "5.1391"},
Mg = {"atomicNumber" : "12","atomicMass" :"24.305", "elementName" : "Magnesium", "symbol" : "Mg", "meltingPoint" : "639", "boilingPoint" : "1090", "density" : "1.74", "crustPercent" : "2.08", "group" : "2", "electronConfiguration" : "[Ne] 3s2", "ionizationEnergy" : "7.6462"},
Al = {"atomicNumber" : "13","atomicMass" :"26.9815", "elementName" : "Aluminum", "symbol" : "Al", "meltingPoint" : "660", "boilingPoint" : "2467", "density" : "2.7", "crustPercent" : "8.07", "group" : "13", "electronConfiguration" : "[Ne] 3s2á3p1", "ionizationEnergy" : "5.9858"},
Si = {"atomicNumber" : "14","atomicMass" :"28.0855", "elementName" : "Silicon", "symbol" : "Si", "meltingPoint" : "1410", "boilingPoint" : "2355", "density" : "2.33", "crustPercent" : "27.69", "group" : "14", "electronConfiguration" : "[Ne] 3s2á3p2", "ionizationEnergy" : "8.1517"},
P = {"atomicNumber" : "15","atomicMass" :"30.9738", "elementName" : "Phosphorus", "symbol" : "P", "meltingPoint" : "44", "boilingPoint" : "280", "density" : "1.82", "crustPercent" : "0.13", "group" : "15", "electronConfiguration" : "[Ne] 3s2á3p3", "ionizationEnergy" : "10.4867"},
S = {"atomicNumber" : "16","atomicMass" :"32.065", "elementName" : "Sulfur", "symbol" : "S", "meltingPoint" : "113", "boilingPoint" : "445", "density" : "2.07", "crustPercent" : "0.052", "group" : "16", "electronConfiguration" : "[Ne] 3s2á3p4", "ionizationEnergy" : "10.36"},
Cl = {"atomicNumber" : "17","atomicMass" :"35.453", "elementName" : "Chlorine", "symbol" : "Cl", "meltingPoint" : "-101", "boilingPoint" : "-35", "density" : "3.21", "crustPercent" : "0.045", "group" : "17", "electronConfiguration" : "[Ne] 3s2á3p5", "ionizationEnergy" : "12.9676"},
Ar = {"atomicNumber" : "18","atomicMass" :"39.948", "elementName" : "Argon", "symbol" : "Ar", "meltingPoint" : "-189", "boilingPoint" : "-186", "density" : "1.78", "crustPercent" : "", "group" : "18", "electronConfiguration" : "[Ne] 3s2á3p6", "ionizationEnergy" : "15.7596"},
K = {"atomicNumber" : "19","atomicMass" :"39.0983", "elementName" : "Potassium", "symbol" : "K", "meltingPoint" : "64", "boilingPoint" : "774", "density" : "0.86", "crustPercent" : "2.58", "group" : "1", "electronConfiguration" : "[Ar] 4s1", "ionizationEnergy" : "4.3407"},
Ca = {"atomicNumber" : "20","atomicMass" :"40.078", "elementName" : "Calcium", "symbol" : "Ca", "meltingPoint" : "839", "boilingPoint" : "1484", "density" : "1.55", "crustPercent" : "3.65", "group" : "2", "electronConfiguration" : "[Ar] 4s2", "ionizationEnergy" : "6.1132"},
Sc = {"atomicNumber" : "21","atomicMass" :"44.9559", "elementName" : "Scandium", "symbol" : "Sc", "meltingPoint" : "1539", "boilingPoint" : "2832", "density" : "2.99", "crustPercent" : "", "group" : "3", "electronConfiguration" : "[Ar] 3d1á4s2", "ionizationEnergy" : "6.5615"},
Ti = {"atomicNumber" : "22","atomicMass" :"47.867", "elementName" : "Titanium", "symbol" : "Ti", "meltingPoint" : "1660", "boilingPoint" : "3287", "density" : "4.54", "crustPercent" : "0.62", "group" : "4", "electronConfiguration" : "[Ar] 3d2á4s2", "ionizationEnergy" : "6.8281"},
V = {"atomicNumber" : "23","atomicMass" :"50.9415", "elementName" : "Vanadium", "symbol" : "V", "meltingPoint" : "1890", "boilingPoint" : "3380", "density" : "6.11", "crustPercent" : "", "group" : "5", "electronConfiguration" : "[Ar] 3d3á4s2", "ionizationEnergy" : "6.7462"},
Cr = {"atomicNumber" : "24","atomicMass" :"51.9961", "elementName" : "Chromium", "symbol" : "Cr", "meltingPoint" : "1857", "boilingPoint" : "2672", "density" : "7.19", "crustPercent" : "0.035", "group" : "6", "electronConfiguration" : "[Ar] 3d5á4s1", "ionizationEnergy" : "6.7665"},
Mn = {"atomicNumber" : "25","atomicMass" :"54.938", "elementName" : "Manganese", "symbol" : "Mn", "meltingPoint" : "1245", "boilingPoint" : "1962", "density" : "7.43", "crustPercent" : "0.09", "group" : "7", "electronConfiguration" : "[Ar] 3d5á4s2", "ionizationEnergy" : "7.434"},
Fe = {"atomicNumber" : "26","atomicMass" :"55.845", "elementName" : "Iron", "symbol" : "Fe", "meltingPoint" : "1535", "boilingPoint" : "2750", "density" : "7.87", "crustPercent" : "5.05", "group" : "8", "electronConfiguration" : "[Ar] 3d6á4s2", "ionizationEnergy" : "7.9024"},
Co = {"atomicNumber" : "27","atomicMass" :"58.9332", "elementName" : "Cobalt", "symbol" : "Co", "meltingPoint" : "1495", "boilingPoint" : "2870", "density" : "8.9", "crustPercent" : "", "group" : "9", "electronConfiguration" : "[Ar] 3d7á4s2", "ionizationEnergy" : "7.881"},
Ni = {"atomicNumber" : "28","atomicMass" :"58.6934", "elementName" : "Nickel", "symbol" : "Ni", "meltingPoint" : "1453", "boilingPoint" : "2732", "density" : "8.9", "crustPercent" : "0.019", "group" : "10", "electronConfiguration" : "[Ar] 3d8á4s2", "ionizationEnergy" : "7.6398"},
Cu = {"atomicNumber" : "29","atomicMass" :"63.546", "elementName" : "Copper", "symbol" : "Cu", "meltingPoint" : "1083", "boilingPoint" : "2567", "density" : "8.96", "crustPercent" : "", "group" : "11", "electronConfiguration" : "[Ar] 3d10á4s1", "ionizationEnergy" : "7.7264"},
Zn = {"atomicNumber" : "30","atomicMass" :"65.39", "elementName" : "Zinc", "symbol" : "Zn", "meltingPoint" : "420", "boilingPoint" : "907", "density" : "7.13", "crustPercent" : "", "group" : "12", "electronConfiguration" : "[Ar] 3d10á4s2", "ionizationEnergy" : "9.3942"},
Ga = {"atomicNumber" : "31","atomicMass" :"69.723", "elementName" : "Gallium", "symbol" : "Ga", "meltingPoint" : "30", "boilingPoint" : "2403", "density" : "5.91", "crustPercent" : "", "group" : "13", "electronConfiguration" : "[Ar] 3d10á4s2á4p1", "ionizationEnergy" : "5.9993"},
Ge = {"atomicNumber" : "32","atomicMass" :"72.64", "elementName" : "Germanium", "symbol" : "Ge", "meltingPoint" : "937", "boilingPoint" : "2830", "density" : "5.32", "crustPercent" : "", "group" : "14", "electronConfiguration" : "[Ar] 3d10á4s2á4p2", "ionizationEnergy" : "7.8994"},
As = {"atomicNumber" : "33","atomicMass" :"74.9216", "elementName" : "Arsenic", "symbol" : "As", "meltingPoint" : "81", "boilingPoint" : "613", "density" : "5.72", "crustPercent" : "", "group" : "15", "electronConfiguration" : "[Ar] 3d10á4s2á4p3", "ionizationEnergy" : "9.7886"},
Se = {"atomicNumber" : "34","atomicMass" :"78.96", "elementName" : "Selenium", "symbol" : "Se", "meltingPoint" : "217", "boilingPoint" : "685", "density" : "4.79", "crustPercent" : "", "group" : "16", "electronConfiguration" : "[Ar] 3d10á4s2á4p4", "ionizationEnergy" : "9.7524"},
Br = {"atomicNumber" : "35","atomicMass" :"79.904", "elementName" : "Bromine", "symbol" : "Br", "meltingPoint" : "-7", "boilingPoint" : "59", "density" : "3.12", "crustPercent" : "", "group" : "17", "electronConfiguration" : "[Ar] 3d10á4s2á4p5", "ionizationEnergy" : "11.8138"},
Kr = {"atomicNumber" : "36","atomicMass" :"83.8", "elementName" : "Krypton", "symbol" : "Kr", "meltingPoint" : "-157", "boilingPoint" : "-153", "density" : "3.75", "crustPercent" : "", "group" : "18", "electronConfiguration" : "[Ar] 3d10á4s2á4p6", "ionizationEnergy" : "13.9996"},
Rb = {"atomicNumber" : "37","atomicMass" :"85.4678", "elementName" : "Rubidium", "symbol" : "Rb", "meltingPoint" : "39", "boilingPoint" : "688", "density" : "1.63", "crustPercent" : "", "group" : "1", "electronConfiguration" : "[Kr] 5s1", "ionizationEnergy" : "4.1771"},
Sr = {"atomicNumber" : "38","atomicMass" :"87.62", "elementName" : "Strontium", "symbol" : "Sr", "meltingPoint" : "769", "boilingPoint" : "1384", "density" : "2.54", "crustPercent" : "", "group" : "2", "electronConfiguration" : "[Kr] 5s2", "ionizationEnergy" : "5.6949"},
Y = {"atomicNumber" : "39","atomicMass" :"88.9059", "elementName" : "Yttrium", "symbol" : "Y", "meltingPoint" : "1523", "boilingPoint" : "3337", "density" : "4.47", "crustPercent" : "", "group" : "3", "electronConfiguration" : "[Kr] 4d1á5s2", "ionizationEnergy" : "6.2173"},
Zr = {"atomicNumber" : "40","atomicMass" :"91.224", "elementName" : "Zirconium", "symbol" : "Zr", "meltingPoint" : "1852", "boilingPoint" : "4377", "density" : "6.51", "crustPercent" : "0.025", "group" : "4", "electronConfiguration" : "[Kr] 4d2á5s2", "ionizationEnergy" : "6.6339"},
Nb = {"atomicNumber" : "41","atomicMass" :"92.9064", "elementName" : "Niobium", "symbol" : "Nb", "meltingPoint" : "2468", "boilingPoint" : "4927", "density" : "8.57", "crustPercent" : "", "group" : "5", "electronConfiguration" : "[Kr] 4d4á5s1", "ionizationEnergy" : "6.7589"},
Mo = {"atomicNumber" : "42","atomicMass" :"95.94", "elementName" : "Molybdenum", "symbol" : "Mo", "meltingPoint" : "2617", "boilingPoint" : "4612", "density" : "10.22", "crustPercent" : "", "group" : "6", "electronConfiguration" : "[Kr] 4d5á5s1", "ionizationEnergy" : "7.0924"},
Tc = {"atomicNumber" : "43","atomicMass" :"98", "elementName" : "Technetium", "symbol" : "Tc", "meltingPoint" : "2200", "boilingPoint" : "4877", "density" : "11.5", "crustPercent" : "", "group" : "7", "electronConfiguration" : "[Kr] 4d5á5s2", "ionizationEnergy" : "7.28"},
Ru = {"atomicNumber" : "44","atomicMass" :"101.07", "elementName" : "Ruthenium", "symbol" : "Ru", "meltingPoint" : "2250", "boilingPoint" : "3900", "density" : "12.37", "crustPercent" : "", "group" : "8", "electronConfiguration" : "[Kr] 4d7á5s1", "ionizationEnergy" : "7.3605"},
Rh = {"atomicNumber" : "45","atomicMass" :"102.9055", "elementName" : "Rhodium", "symbol" : "Rh", "meltingPoint" : "1966", "boilingPoint" : "3727", "density" : "12.41", "crustPercent" : "", "group" : "9", "electronConfiguration" : "[Kr] 4d8á5s1", "ionizationEnergy" : "7.4589"},
Pd = {"atomicNumber" : "46","atomicMass" :"106.42", "elementName" : "Palladium", "symbol" : "Pd", "meltingPoint" : "1552", "boilingPoint" : "2927", "density" : "12.02", "crustPercent" : "", "group" : "10", "electronConfiguration" : "[Kr] 4d10", "ionizationEnergy" : "8.3369"},
Ag = {"atomicNumber" : "47","atomicMass" :"107.8682", "elementName" : "Silver", "symbol" : "Ag", "meltingPoint" : "962", "boilingPoint" : "2212", "density" : "10.5", "crustPercent" : "", "group" : "11", "electronConfiguration" : "[Kr] 4d10á5s1", "ionizationEnergy" : "7.5762"},
Cd = {"atomicNumber" : "48","atomicMass" :"112.411", "elementName" : "Cadmium", "symbol" : "Cd", "meltingPoint" : "321", "boilingPoint" : "765", "density" : "8.65", "crustPercent" : "", "group" : "12", "electronConfiguration" : "[Kr] 4d10á5s2", "ionizationEnergy" : "8.9938"},
In = {"atomicNumber" : "49","atomicMass" :"114.818", "elementName" : "Indium", "symbol" : "In", "meltingPoint" : "157", "boilingPoint" : "2000", "density" : "7.31", "crustPercent" : "", "group" : "13", "electronConfiguration" : "[Kr] 4d10á5s2á5p1", "ionizationEnergy" : "5.7864"},
Sn = {"atomicNumber" : "50","atomicMass" :"118.71", "elementName" : "Tin", "symbol" : "Sn", "meltingPoint" : "232", "boilingPoint" : "2270", "density" : "7.31", "crustPercent" : "", "group" : "14", "electronConfiguration" : "[Kr] 4d10á5s2á5p2", "ionizationEnergy" : "7.3439"},
Sb = {"atomicNumber" : "51","atomicMass" :"121.76", "elementName" : "Antimony", "symbol" : "Sb", "meltingPoint" : "630", "boilingPoint" : "1750", "density" : "6.68", "crustPercent" : "", "group" : "15", "electronConfiguration" : "[Kr] 4d10á5s2á5p3", "ionizationEnergy" : "8.6084"},
Te = {"atomicNumber" : "52","atomicMass" :"127.6", "elementName" : "Tellurium", "symbol" : "Te", "meltingPoint" : "449", "boilingPoint" : "990", "density" : "6.24", "crustPercent" : "", "group" : "16", "electronConfiguration" : "[Kr] 4d10á5s2á5p4", "ionizationEnergy" : "9.0096"},
I = {"atomicNumber" : "53","atomicMass" :"126.9045", "elementName" : "Iodine", "symbol" : "I", "meltingPoint" : "114", "boilingPoint" : "184", "density" : "4.93", "crustPercent" : "", "group" : "17", "electronConfiguration" : "[Kr] 4d10á5s2á5p5", "ionizationEnergy" : "10.4513"},
Xe = {"atomicNumber" : "54","atomicMass" :"131.293", "elementName" : "Xenon", "symbol" : "Xe", "meltingPoint" : "-112", "boilingPoint" : "-108", "density" : "5.9", "crustPercent" : "", "group" : "18", "electronConfiguration" : "[Kr] 4d10á5s2á5p6", "ionizationEnergy" : "12.1298"},
Cs = {"atomicNumber" : "55","atomicMass" :"132.9055", "elementName" : "Cesium", "symbol" : "Cs", "meltingPoint" : "29", "boilingPoint" : "678", "density" : "1.87", "crustPercent" : "", "group" : "1", "electronConfiguration" : "[Xe] 6s1", "ionizationEnergy" : "3.8939"},
Ba = {"atomicNumber" : "56","atomicMass" :"137.327", "elementName" : "Barium", "symbol" : "Ba", "meltingPoint" : "725", "boilingPoint" : "1140", "density" : "3.59", "crustPercent" : "0.05", "group" : "2", "electronConfiguration" : "[Xe] 6s2", "ionizationEnergy" : "5.2117"},
La = {"atomicNumber" : "57","atomicMass" :"138.9055", "elementName" : "Lanthanum", "symbol" : "La", "meltingPoint" : "920", "boilingPoint" : "3469", "density" : "6.15", "crustPercent" : "", "group" : "3", "electronConfiguration" : "[Xe] 5d1á6s2", "ionizationEnergy" : "5.5769"},
Ce = {"atomicNumber" : "58","atomicMass" :"140.116", "elementName" : "Cerium", "symbol" : "Ce", "meltingPoint" : "795", "boilingPoint" : "3257", "density" : "6.77", "crustPercent" : "", "group" : "101", "electronConfiguration" : "[Xe] 4f1á5d1á6s2", "ionizationEnergy" : "5.5387"},
Pr = {"atomicNumber" : "59","atomicMass" :"140.9077", "elementName" : "Praseodymium", "symbol" : "Pr", "meltingPoint" : "935", "boilingPoint" : "3127", "density" : "6.77", "crustPercent" : "", "group" : "101", "electronConfiguration" : "[Xe] 4f3á6s2", "ionizationEnergy" : "5.473"},
Nd = {"atomicNumber" : "60","atomicMass" :"144.24", "elementName" : "Neodymium", "symbol" : "Nd", "meltingPoint" : "1010", "boilingPoint" : "3127", "density" : "7.01", "crustPercent" : "", "group" : "101", "electronConfiguration" : "[Xe] 4f4á6s2", "ionizationEnergy" : "5.525"},
Pm = {"atomicNumber" : "61","atomicMass" :"145", "elementName" : "Promethium", "symbol" : "Pm", "meltingPoint" : "1100", "boilingPoint" : "3000", "density" : "7.3", "crustPercent" : "", "group" : "101", "electronConfiguration" : "[Xe] 4f5á6s2", "ionizationEnergy" : "5.582"},
Sm = {"atomicNumber" : "62","atomicMass" :"150.36", "elementName" : "Samarium", "symbol" : "Sm", "meltingPoint" : "1072", "boilingPoint" : "1900", "density" : "7.52", "crustPercent" : "", "group" : "101", "electronConfiguration" : "[Xe] 4f6á6s2", "ionizationEnergy" : "5.6437"},
Eu = {"atomicNumber" : "63","atomicMass" :"151.964", "elementName" : "Europium", "symbol" : "Eu", "meltingPoint" : "822", "boilingPoint" : "1597", "density" : "5.24", "crustPercent" : "", "group" : "101", "electronConfiguration" : "[Xe] 4f7á6s2", "ionizationEnergy" : "5.6704"},
Gd = {"atomicNumber" : "64","atomicMass" :"157.25", "elementName" : "Gadolinium", "symbol" : "Gd", "meltingPoint" : "1311", "boilingPoint" : "3233", "density" : "7.9", "crustPercent" : "", "group" : "101", "electronConfiguration" : "[Xe] 4f7á5d1á6s2", "ionizationEnergy" : "6.1501"},
Tb = {"atomicNumber" : "65","atomicMass" :"158.9253", "elementName" : "Terbium", "symbol" : "Tb", "meltingPoint" : "1360", "boilingPoint" : "3041", "density" : "8.23", "crustPercent" : "", "group" : "101", "electronConfiguration" : "[Xe] 4f9á6s2", "ionizationEnergy" : "5.8638"},
Dy = {"atomicNumber" : "66","atomicMass" :"162.5", "elementName" : "Dysprosium", "symbol" : "Dy", "meltingPoint" : "1412", "boilingPoint" : "2562", "density" : "8.55", "crustPercent" : "", "group" : "101", "electronConfiguration" : "[Xe] 4f10á6s2", "ionizationEnergy" : "5.9389"},
Ho = {"atomicNumber" : "67","atomicMass" :"164.9303", "elementName" : "Holmium", "symbol" : "Ho", "meltingPoint" : "1470", "boilingPoint" : "2720", "density" : "8.8", "crustPercent" : "", "group" : "101", "electronConfiguration" : "[Xe] 4f11á6s2", "ionizationEnergy" : "6.0215"},
Er = {"atomicNumber" : "68","atomicMass" :"167.259", "elementName" : "Erbium", "symbol" : "Er", "meltingPoint" : "1522", "boilingPoint" : "2510", "density" : "9.07", "crustPercent" : "", "group" : "101", "electronConfiguration" : "[Xe] 4f12á6s2", "ionizationEnergy" : "6.1077"},
Tm = {"atomicNumber" : "69","atomicMass" :"168.9342", "elementName" : "Thulium", "symbol" : "Tm", "meltingPoint" : "1545", "boilingPoint" : "1727", "density" : "9.32", "crustPercent" : "", "group" : "101", "electronConfiguration" : "[Xe] 4f13á6s2", "ionizationEnergy" : "6.1843"},
Yb = {"atomicNumber" : "70","atomicMass" :"173.04", "elementName" : "Ytterbium", "symbol" : "Yb", "meltingPoint" : "824", "boilingPoint" : "1466", "density" : "6.9", "crustPercent" : "", "group" : "101", "electronConfiguration" : "[Xe] 4f14á6s2", "ionizationEnergy" : "6.2542"},
Lu = {"atomicNumber" : "71","atomicMass" :"174.967", "elementName" : "Lutetium", "symbol" : "Lu", "meltingPoint" : "1656", "boilingPoint" : "3315", "density" : "9.84", "crustPercent" : "", "group" : "101", "electronConfiguration" : "[Xe] 4f14á5d1á6s2", "ionizationEnergy" : "5.4259"},
Hf = {"atomicNumber" : "72","atomicMass" :"178.49", "elementName" : "Hafnium", "symbol" : "Hf", "meltingPoint" : "2150", "boilingPoint" : "5400", "density" : "13.31", "crustPercent" : "", "group" : "4", "electronConfiguration" : "[Xe] 4f14á5d2á6s2", "ionizationEnergy" : "6.8251"},
Ta = {"atomicNumber" : "73","atomicMass" :"180.9479", "elementName" : "Tantalum", "symbol" : "Ta", "meltingPoint" : "2996", "boilingPoint" : "5425", "density" : "16.65", "crustPercent" : "", "group" : "5", "electronConfiguration" : "[Xe] 4f14á5d3á6s2", "ionizationEnergy" : "7.5496"},
W = {"atomicNumber" : "74","atomicMass" :"183.84", "elementName" : "Tungsten", "symbol" : "W", "meltingPoint" : "3410", "boilingPoint" : "5660", "density" : "19.35", "crustPercent" : "", "group" : "6", "electronConfiguration" : "[Xe] 4f14á5d4á6s2", "ionizationEnergy" : "7.864"},
Re = {"atomicNumber" : "75","atomicMass" :"186.207", "elementName" : "Rhenium", "symbol" : "Re", "meltingPoint" : "3180", "boilingPoint" : "5627", "density" : "21.04", "crustPercent" : "", "group" : "7", "electronConfiguration" : "[Xe] 4f14á5d5á6s2", "ionizationEnergy" : "7.8335"},
Os = {"atomicNumber" : "76","atomicMass" :"190.23", "elementName" : "Osmium", "symbol" : "Os", "meltingPoint" : "3045", "boilingPoint" : "5027", "density" : "22.6", "crustPercent" : "", "group" : "8", "electronConfiguration" : "[Xe] 4f14á5d6á6s2", "ionizationEnergy" : "8.4382"},
Ir = {"atomicNumber" : "77","atomicMass" :"192.217", "elementName" : "Iridium", "symbol" : "Ir", "meltingPoint" : "2410", "boilingPoint" : "4527", "density" : "22.4", "crustPercent" : "", "group" : "9", "electronConfiguration" : "[Xe] 4f14á5d7á6s2", "ionizationEnergy" : "8.967"},
Pt = {"atomicNumber" : "78","atomicMass" :"195.078", "elementName" : "Platinum", "symbol" : "Pt", "meltingPoint" : "1772", "boilingPoint" : "3827", "density" : "21.45", "crustPercent" : "", "group" : "10", "electronConfiguration" : "[Xe] 4f14á5d9á6s1", "ionizationEnergy" : "8.9587"},
Au = {"atomicNumber" : "79","atomicMass" :"196.9665", "elementName" : "Gold", "symbol" : "Au", "meltingPoint" : "1064", "boilingPoint" : "2807", "density" : "19.32", "crustPercent" : "", "group" : "11", "electronConfiguration" : "[Xe] 4f14á5d10á6s1", "ionizationEnergy" : "9.2255"},
Hg = {"atomicNumber" : "80","atomicMass" :"200.59", "elementName" : "Mercury", "symbol" : "Hg", "meltingPoint" : "-39", "boilingPoint" : "357", "density" : "13.55", "crustPercent" : "", "group" : "12", "electronConfiguration" : "[Xe] 4f14á5d10á6s2", "ionizationEnergy" : "10.4375"},
Tl = {"atomicNumber" : "81","atomicMass" :"204.3833", "elementName" : "Thallium", "symbol" : "Tl", "meltingPoint" : "303", "boilingPoint" : "1457", "density" : "11.85", "crustPercent" : "", "group" : "13", "electronConfiguration" : "[Xe] 4f14á5d10á6s2á6p1", "ionizationEnergy" : "6.1082"},
Pb = {"atomicNumber" : "82","atomicMass" :"207.2", "elementName" : "Lead", "symbol" : "Pb", "meltingPoint" : "327", "boilingPoint" : "1740", "density" : "11.35", "crustPercent" : "", "group" : "14", "electronConfiguration" : "[Xe] 4f14á5d10á6s2á6p2", "ionizationEnergy" : "7.4167"},
Bi = {"atomicNumber" : "83","atomicMass" :"208.9804", "elementName" : "Bismuth", "symbol" : "Bi", "meltingPoint" : "271", "boilingPoint" : "1560", "density" : "9.75", "crustPercent" : "", "group" : "15", "electronConfiguration" : "[Xe] 4f14á5d10á6s2á6p3", "ionizationEnergy" : "7.2856"},
Po = {"atomicNumber" : "84","atomicMass" :"209", "elementName" : "Polonium", "symbol" : "Po", "meltingPoint" : "254", "boilingPoint" : "962", "density" : "9.3", "crustPercent" : "", "group" : "16", "electronConfiguration" : "[Xe] 4f14á5d10á6s2á6p4", "ionizationEnergy" : "8.417"},
At = {"atomicNumber" : "85","atomicMass" :"210", "elementName" : "Astatine", "symbol" : "At", "meltingPoint" : "302", "boilingPoint" : "337", "density" : "", "crustPercent" : "", "group" : "17", "electronConfiguration" : "[Xe] 4f14á5d10á6s2á6p5", "ionizationEnergy" : "9.3"},
Rn = {"atomicNumber" : "86","atomicMass" :"222", "elementName" : "Radon", "symbol" : "Rn", "meltingPoint" : "-71", "boilingPoint" : "-62", "density" : "9.73", "crustPercent" : "", "group" : "18", "electronConfiguration" : "[Xe] 4f14á5d10á6s2á6p6", "ionizationEnergy" : "10.7485"},
Fr = {"atomicNumber" : "87","atomicMass" :"223", "elementName" : "Francium", "symbol" : "Fr", "meltingPoint" : "27", "boilingPoint" : "677", "density" : "", "crustPercent" : "", "group" : "1", "electronConfiguration" : "[Rn] 7s1", "ionizationEnergy" : "4.0727"},
Ra = {"atomicNumber" : "88","atomicMass" :"226", "elementName" : "Radium", "symbol" : "Ra", "meltingPoint" : "700", "boilingPoint" : "1737", "density" : "5.5", "crustPercent" : "", "group" : "2", "electronConfiguration" : "[Rn] 7s2", "ionizationEnergy" : "5.2784"},
Ac = {"atomicNumber" : "89","atomicMass" :"227", "elementName" : "Actinium", "symbol" : "Ac", "meltingPoint" : "1050", "boilingPoint" : "3200", "density" : "10.07", "crustPercent" : "", "group" : "3", "electronConfiguration" : "[Rn] 6d1á7s2", "ionizationEnergy" : "5.17"},
Th = {"atomicNumber" : "90","atomicMass" :"232.0381", "elementName" : "Thorium", "symbol" : "Th", "meltingPoint" : "1750", "boilingPoint" : "4790", "density" : "11.72", "crustPercent" : "", "group" : "102", "electronConfiguration" : "[Rn] 6d2á7s2", "ionizationEnergy" : "6.3067"},
Pa = {"atomicNumber" : "91","atomicMass" :"231.0359", "elementName" : "Protactinium", "symbol" : "Pa", "meltingPoint" : "1568", "boilingPoint" : "", "density" : "15.4", "crustPercent" : "", "group" : "102", "electronConfiguration" : "[Rn] 5f2á6d1á7s2", "ionizationEnergy" : "5.89"},
U = {"atomicNumber" : "92","atomicMass" :"238.0289", "elementName" : "Uranium", "symbol" : "U", "meltingPoint" : "1132", "boilingPoint" : "3818", "density" : "18.95", "crustPercent" : "", "group" : "102", "electronConfiguration" : "[Rn] 5f3á6d1á7s2", "ionizationEnergy" : "6.1941"},
Np = {"atomicNumber" : "93","atomicMass" :"237", "elementName" : "Neptunium", "symbol" : "Np", "meltingPoint" : "640", "boilingPoint" : "3902", "density" : "20.2", "crustPercent" : "", "group" : "102", "electronConfiguration" : "[Rn] 5f4á6d1á7s2", "ionizationEnergy" : "6.2657"},
Pu = {"atomicNumber" : "94","atomicMass" :"244", "elementName" : "Plutonium", "symbol" : "Pu", "meltingPoint" : "640", "boilingPoint" : "3235", "density" : "19.84", "crustPercent" : "", "group" : "102", "electronConfiguration" : "[Rn] 5f6á7s2", "ionizationEnergy" : "6.0262"},
Am = {"atomicNumber" : "95","atomicMass" :"243", "elementName" : "Americium", "symbol" : "Am", "meltingPoint" : "994", "boilingPoint" : "2607", "density" : "13.67", "crustPercent" : "", "group" : "102", "electronConfiguration" : "[Rn] 5f7á7s2", "ionizationEnergy" : "5.9738"},
Cm = {"atomicNumber" : "96","atomicMass" :"247", "elementName" : "Curium", "symbol" : "Cm", "meltingPoint" : "1340", "boilingPoint" : "", "density" : "13.5", "crustPercent" : "", "group" : "102", "electronConfiguration" : "", "ionizationEnergy" : "5.9915"},
Bk = {"atomicNumber" : "97","atomicMass" :"247", "elementName" : "Berkelium", "symbol" : "Bk", "meltingPoint" : "986", "boilingPoint" : "", "density" : "14.78", "crustPercent" : "", "group" : "102", "electronConfiguration" : "", "ionizationEnergy" : "6.1979"},
Cf = {"atomicNumber" : "98","atomicMass" :"251", "elementName" : "Californium", "symbol" : "Cf", "meltingPoint" : "900", "boilingPoint" : "", "density" : "15.1", "crustPercent" : "", "group" : "102", "electronConfiguration" : "", "ionizationEnergy" : "6.2817"},
Es = {"atomicNumber" : "99","atomicMass" :"252", "elementName" : "Einsteinium", "symbol" : "Es", "meltingPoint" : "860", "boilingPoint" : "", "density" : "", "crustPercent" : "", "group" : "102", "electronConfiguration" : "", "ionizationEnergy" : "6.42"},
Fm = {"atomicNumber" : "100","atomicMass" :"257", "elementName" : "Fermium", "symbol" : "Fm", "meltingPoint" : "1527", "boilingPoint" : "", "density" : "", "crustPercent" : "", "group" : "102", "electronConfiguration" : "", "ionizationEnergy" : "6.5"},
Md = {"atomicNumber" : "101","atomicMass" :"258", "elementName" : "Mendelevium", "symbol" : "Md", "meltingPoint" : "", "boilingPoint" : "", "density" : "", "crustPercent" : "", "group" : "102", "electronConfiguration" : "", "ionizationEnergy" : "6.58"},
No = {"atomicNumber" : "102","atomicMass" :"259", "elementName" : "Nobelium", "symbol" : "No", "meltingPoint" : "827", "boilingPoint" : "", "density" : "", "crustPercent" : "", "group" : "102", "electronConfiguration" : "", "ionizationEnergy" : "6.65"},
Lr = {"atomicNumber" : "103","atomicMass" :"262", "elementName" : "Lawrencium", "symbol" : "Lr", "meltingPoint" : "1627", "boilingPoint" : "", "density" : "", "crustPercent" : "", "group" : "102", "electronConfiguration" : "", "ionizationEnergy" : "4.9"},
Rf = {"atomicNumber" : "104","atomicMass" :"261", "elementName" : "Rutherfordium", "symbol" : "Rf", "meltingPoint" : "", "boilingPoint" : "", "density" : "", "crustPercent" : "", "group" : "4", "electronConfiguration" : "", "ionizationEnergy" : ""},
Db = {"atomicNumber" : "105","atomicMass" :"262", "elementName" : "Dubnium", "symbol" : "Db", "meltingPoint" : "", "boilingPoint" : "", "density" : "", "crustPercent" : "", "group" : "5", "electronConfiguration" : "", "ionizationEnergy" : ""},
Sg = {"atomicNumber" : "106","atomicMass" :"266", "elementName" : "Seaborgium", "symbol" : "Sg", "meltingPoint" : "", "boilingPoint" : "", "density" : "", "crustPercent" : "", "group" : "6", "electronConfiguration" : "", "ionizationEnergy" : ""},
Bh = {"atomicNumber" : "107","atomicMass" :"264", "elementName" : "Bohrium", "symbol" : "Bh", "meltingPoint" : "", "boilingPoint" : "", "density" : "", "crustPercent" : "", "group" : "7", "electronConfiguration" : "", "ionizationEnergy" : ""},
Hs = {"atomicNumber" : "108","atomicMass" :"277", "elementName" : "Hassium", "symbol" : "Hs", "meltingPoint" : "", "boilingPoint" : "", "density" : "", "crustPercent" : "", "group" : "8", "electronConfiguration" : "", "ionizationEnergy" : ""},
Mt = {"atomicNumber" : "109","atomicMass" :"268", "elementName" : "Meitnerium", "symbol" : "Mt", "meltingPoint" : "", "boilingPoint" : "", "density" : "", "crustPercent" : "", "group" : "9", "electronConfiguration" : "", "ionizationEnergy" : ""},
];




var grams;






function doTheThing() {
  

  moleculeMolarMass = 0;
  elementsInMolecule = [];


  grams = $("#grams").val();
  i
  //var moles = $("#moles").val();
  var inputMolecule = $("#element").val();

  if (inputMolecule.length >1 ){


	spliceMolecule(inputMolecule);
    console.log("molecule: " + inputMolecule)


  } else { 

  var errorBox = "<div class='moleculeBox'><p0>Oh shit!" + " </p0><p2>That's a molecule." + "</p2><p3> Something went wrong.</p3><p2><br />";
  $(".result").prepend(errorBox);



  }
  

}


function spliceMolecule(inputMolecule){

  var l = 0;

  while (l < inputMolecule.length) {

    var a = inputMolecule.charAt(l);
    var b = inputMolecule.charAt(l+1);
    var c = inputMolecule.charAt(l+2);


    // If a is not a number
    if (isNaN(a * 1)) { 

      // Test Xx
      if (isCaps(a) && !isCaps(b)) {

        if (!isNaN(c * 1)) { 

        // If it's the last one.
          if ( l > (inputMolecule.length - 2 ) ) {

            processElement(a, 1);

          } 

          processElement(a+b, c);

          } else {
          processElement(a+b, 1);

          }
      
        }



      // test XX
      if ( isCaps(a) && isCaps(b) ) {

        // if next char is number
        if (!isNaN(b * 1)) { 

          // If it's the last one.
          if ( l > (inputMolecule.length - 2 ) ) {

            processElement(a, 1);

            
          } else {

          // Not the last one
          processElement(a, (b*1));

        }


        } else {
          processElement(a, 1);

        }

      }

    } // end it's not a number

    l++

  }

  processMolecule();

}

function processElement(element, quantity) {

  if (!(quantity > 0)) { quantity = 1 }

    var molobj = new Object();
    molobj.symbol = element
    molobj.mass = getMolarMass(element) * quantity;

    elementsInMolecule.push( molobj );

  moleculeMolarMass += quantity * getMolarMass(element);

}


function processMolecule() {

  var gramsOfInputMolecule = $("#grams").val();
  var molesOfMolecule = gramsOfInputMolecule / moleculeMolarMass;

    wtf(r(molesOfMolecule) + " moles of the molecule");
    wtf(moleculeMolarMass + "molar mass of molecule: ")


  var resultBoxMolecule = "<div class='moleculeBox'><p0>ASd" + $("#element").val() + " </p0><p2>" + r(molesOfMolecule) + "</p2><p3> moles </p3><p2>" + "" + $("#grams").val() + "</p2><p3> grams </p3><br />";

  $(".result").prepend(resultBoxMolecule);
  $("#moles").val(r(molesOfMolecule))



  for (e in elementsInMolecule){

  //molarPercent = (elementsInMolecule[e].mass / moleculeMolarMass );



  var molesOfElement = ( elementsInMolecule[e].mass / getMolarMass(elementsInMolecule[e].symbol) * molesOfMolecule);

  var molesOfElementDisplay = (r(molesOfElement) + " moles of " + getName(elementsInMolecule[e].symbol) )
  var gramsOfElement = molesOfElement * getMolarMass(elementsInMolecule[e].symbol);

  var gramsOfElementDisplay = gramsOfElement + " grams of " + getName(elementsInMolecule[e].symbol);

  wtf(molesOfElementDisplay);
  wtf(gramsOfElementDisplay);


var resultBoxElement =  "<div class='elementBox'><p1>" + getName(elementsInMolecule[e].symbol) + "</p1><br /><p2>" + r(molesOfElement) + "</p2><p3> moles </p3>" + "<br /><p2> " + r(gramsOfElement) + "</p2><p3> grams</p3>";


  $(".moleculeBox").first().append(resultBoxElement);






}



}



function r(n) {

  n = n * 100;
  n = Math.round(n);
  n = n / 100;

  return n

}




function getName(element) {

for (i in theElements) {

    if (theElements[i].symbol === element) {

      var elementName = theElements[i].elementName;

      return elementName;

    }
  }



}



function isCaps(char) {

  if (char == char.toUpperCase()) {

    return true;

  } else {

  return false;

  }

}


function getMolarMass(element) {


  for (i in theElements) {

    if (theElements[i].symbol === element) {

      var molarMass = theElements[i].atomicMass;

      return molarMass;

    }
  }
}



function gramsToMoles(inputMolecule, grams) {

  for (i in theElements) {

    if (theElements[i].symbol === inputMolecule) {

      var moles = (Math.round( (grams / theElements[i].atomicMass) * 1000) ) / 1000;

      var resultDisplay="<div class='elementBox'><p1>"  + theElements[i].elementName + "</p1><br />";

      var molesDisplay = grams + "<p3> g</p3> " + "<p2> = </p2>" + moles + "<p3> mol "  + "</p3></div>";

      $("#moles").val(moles)
      $(".result").prepend(resultDisplay + molesDisplay);

    }
  }



}



function getMolarity(inputMolecule, weight) {



}




function clearTheForm() {

$("#weight").val('')
$("#moles").val('')
$("#element").val('')

}

function clearEverything() {

clearTheForm();
$(".result").html("");

}


function wtf(a) {
console.log(a);

} 


function makeTable() {

  var i = 0;
    while ( i < 18) {

      $(".table").append("<div id='" + i + "' style='width:60px;float:left;''></div>");
      i++
      
      
    }

    $(".table").append("<div id='" + 101 + "' style='width:60px;float:left;''></div>");
    $(".table").append("<div id='" + 102 + "' style='width:60px;float:left;''></div>");

  for (i in theElements) {

    var group = theElements[i].group ;
    var group = parseInt(group);
    //var group = group.charAt( group.length-1 );
    wtf(group);

    var colorsArray = [
    '#ccf',
    '#cfc',
    '#cff',
    '#fcc',
    '#fcf',
    '#ffc',
    '#bbe',
    '#beb',
    '#bee',
    '#ebb',
    '#ebe',
    '#eeb',
    '#aac',
    '#aca',
    '#acc',
    '#caa',
    '#cac',
    '#cca',
    '#ccf',
  
    ]

   
    var color = colorsArray[group];
    var tableGroupsArray = [];
    var tableItem="<div class='well' style='float:left;margin-left:3px;padding:6px;margin-top:3px;background-color:" + color + ";color:#333;width:40px;'><h3><span style='color:#e1e1e1'>" + "</span>" + theElements[i].symbol + "</h2></span><span style='color:#777;'>";


    $("#" + group).append(tableItem);

  }


}

