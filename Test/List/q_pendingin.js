// Soal Pilihan Ganda (15 Soal) - Berdasarkan Modul Pendingin
const ques = [
    { 
        question : "Apa fungsi utama dari sistem pendinginan pada mesin sepeda motor?",
        opt1 : "Mendinginkan pengendara",
        opt2 : "Mempertahankan suhu kerja mesin agar optimal (80-90°C)",
        opt3 : "Membekukan bahan bakar agar irit",
        opt4 : "Menghilangkan suara bising mesin",
        ans : "Mempertahankan suhu kerja mesin agar optimal (80-90°C)"
    },
    { 
        question : "Komponen yang berfungsi mempercepat pembuangan panas pada sistem pendingin udara alami adalah...",
        opt1 : "Radiator",
        opt2 : "Sirip-sirip pendingin (Cooling Fins)",
        opt3 : "Thermostat",
        opt4 : "Water Pump",
        ans : "Sirip-sirip pendingin (Cooling Fins)"
    },
    { 
        question : "Pada sistem pendingin cairan, komponen yang berfungsi mensirkulasikan air dari mesin ke radiator adalah...",
        opt1 : "Reservoir",
        opt2 : "Cooling Fan",
        opt3 : "Water Pump (Pompa Air)",
        opt4 : "Tutup Radiator",
        ans : "Water Pump (Pompa Air)"
    },
    { 
        question : "Apa fungsi dari Thermostat?",
        opt1 : "Menyaring kotoran pada air",
        opt2 : "Membuka dan menutup saluran air menuju radiator berdasarkan suhu",
        opt3 : "Mendinginkan air secara langsung",
        opt4 : "Menambah tekanan air",
        ans : "Membuka dan menutup saluran air menuju radiator berdasarkan suhu"
    },
    { 
        question : "Tutup radiator (Radiator Cap) memiliki pressure valve yang berfungsi untuk...",
        opt1 : "Menurunkan titik didih air",
        opt2 : "Menaikkan titik didih air dengan menahan tekanan",
        opt3 : "Menguras air radiator",
        opt4 : "Mencampur oli dengan air",
        ans : "Menaikkan titik didih air dengan menahan tekanan"
    },
    { 
        question : "Jika mesin mengalami overheat, indikator apa yang biasanya menyala pada dashboard motor modern?",
        opt1 : "Indikator Bensin",
        opt2 : "Indikator MIL (Check Engine)",
        opt3 : "Lampu Suhu (Thermometer Merah)",
        opt4 : "Lampu Sein",
        ans : "Lampu Suhu (Thermometer Merah)"
    },
    { 
        question : "Cairan khusus yang digunakan untuk radiator disebut...",
        opt1 : "Air Mineral",
        opt2 : "Minyak Rem",
        opt3 : "Radiator Coolant",
        opt4 : "Oli Samping",
        ans : "Radiator Coolant"
    },
    { 
        question : "Apa yang terjadi pada Thermostat saat suhu mesin masih dingin (< 80°C)?",
        opt1 : "Thermostat Terbuka Penuh",
        opt2 : "Thermostat Tertutup (Air bersirkulasi lewat jalur bypass)",
        opt3 : "Thermostat Rusak",
        opt4 : "Thermostat Membuang air",
        ans : "Thermostat Tertutup (Air bersirkulasi lewat jalur bypass)"
    },
    { 
        question : "Tangki cadangan untuk menampung uap air atau kelebihan air dari radiator disebut...",
        opt1 : "Fuel Tank",
        opt2 : "Reservoir Tank",
        opt3 : "Vacuum Tank",
        opt4 : "Oil Pan",
        ans : "Reservoir Tank"
    },
    { 
        question : "Apa dampak negatif jika menggunakan air keran biasa untuk radiator dalam jangka panjang?",
        opt1 : "Mesin lebih dingin",
        opt2 : "Menimbulkan karat dan endapan kerak",
        opt3 : "Bensin jadi boros",
        opt4 : "Suara mesin halus",
        ans : "Menimbulkan karat dan endapan kerak"
    },
    { 
        question : "Proses pembuangan udara palsu dari sistem pendingin disebut...",
        opt1 : "Air Bleeding",
        opt2 : "Flushing",
        opt3 : "Overhaul",
        opt4 : "Inreyen",
        ans : "Air Bleeding"
    },
    { 
        question : "Kipas radiator elektrik akan berputar ketika...",
        opt1 : "Mesin baru dinyalakan",
        opt2 : "Kunci kontak ON",
        opt3 : "Sensor suhu mendeteksi panas berlebih pada radiator",
        opt4 : "Motor berjalan kencang",
        ans : "Sensor suhu mendeteksi panas berlebih pada radiator"
    },
    { 
        question : "Salah satu penyebab kebocoran pada sistem pendingin adalah...",
        opt1 : "Selang radiator retak atau klem kendor",
        opt2 : "Oli mesin penuh",
        opt3 : "Busi baru diganti",
        opt4 : "Filter udara bersih",
        ans : "Selang radiator retak atau klem kendor"
    },
    { 
        question : "Alat yang digunakan untuk memeriksa kebocoran tekanan pada radiator adalah...",
        opt1 : "Multitester",
        opt2 : "Radiator Cap Tester",
        opt3 : "Micrometer",
        opt4 : "Timing Light",
        ans : "Radiator Cap Tester"
    },
    { 
        question : "Sistem pendingin oli (Oil Cooler) mendinginkan mesin dengan cara...",
        opt1 : "Menyemprotkan air ke mesin",
        opt2 : "Mengalirkan oli panas melewati radiator oli (Oil Cooler) agar didinginkan udara",
        opt3 : "Mencampur oli dengan es",
        opt4 : "Menggunakan kipas angin besar",
        ans : "Mengalirkan oli panas melewati radiator oli (Oil Cooler) agar didinginkan udara"
    }
];