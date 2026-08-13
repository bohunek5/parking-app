import { useState } from 'react';
import { motion } from 'framer-motion';
import { ReservationForm } from '../components/ReservationForm';

export const Pricing = () => {
    const [showReservation, setShowReservation] = useState(false);

    // Calculator State
    const [calcCategory, setCalcCategory] = useState<'osobowe' | 'duze'>('osobowe');
    const [calcTier, setCalcTier] = useState<'monitorowany' | 'strzezony'>('monitorowany');
    const [calcUnit, setCalcUnit] = useState<'doba' | 'tydzien' | 'miesiack'>('doba');
    const [calcCount, setCalcCount] = useState<number>(1);

    // Pricing Matrix based on official table screenshot
    const priceMatrix = {
        osobowe: {
            name: "Samochody Osobowe, Motocykle, Skutery",
            icon: "directions_car",
            monitorowany: { doba: 30, tydzien: 150, miesiack: 250 },
            strzezony: { doba: 70, tydzien: 350, miesiack: 500 }
        },
        duze: {
            name: "Busy, Dostawcze, Kampery, Przyczepy, Autokary, Ciężarowe",
            icon: "airport_shuttle",
            monitorowany: { doba: 60, tydzien: 300, miesiack: 500 },
            strzezony: { doba: 140, tydzien: 700, miesiack: 1000 }
        }
    };

    // Calculate total price
    const unitPrice = priceMatrix[calcCategory][calcTier][calcUnit];
    const totalPrice = unitPrice * calcCount;

    return (
        <div className="w-full bg-slate-50 dark:bg-slate-950 py-16 px-4 md:px-12 lg:px-24 min-h-screen">
            <div className="max-w-7xl mx-auto flex flex-col gap-12">
                
                {/* Section Header */}
                <div className="text-center flex flex-col gap-4">
                    <span className="inline-block mx-auto px-4 py-1.5 bg-blue-100 dark:bg-blue-950/60 text-primary font-bold text-xs uppercase tracking-widest rounded-full border border-blue-200 dark:border-blue-800">
                        Oficjalny Cennik Parking24 Giżycko
                    </span>
                    <h1 className="text-tech-navy dark:text-white text-4xl md:text-5xl font-extrabold tracking-tight">
                        Cennik Parkowania
                    </h1>
                    <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
                        Przejrzyste stawki bez ukrytych opłat. Wybierz parking <strong className="text-primary">Monitorowany</strong> lub <strong className="text-blue-600 dark:text-blue-400">Strzeżony 24/7</strong>.
                    </p>
                </div>

                {/* OFFICIAL PRICING COMPARISON TABLE */}
                <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
                    <div className="p-6 md:p-8 bg-tech-navy text-white flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800">
                        <div>
                            <h2 className="text-2xl font-bold">Oficjalna Tabela Stawki</h2>
                            <p className="text-slate-300 text-sm">Monitorowany (Monitoring HD 24/7) vs. Strzeżony (Ochrona Fizyczna 24/7)</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="px-3 py-1 bg-green-500/20 text-green-400 border border-green-500/30 text-xs font-bold rounded-full flex items-center gap-1.5">
                                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span> Wolne miejsca
                            </span>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 text-sm uppercase tracking-wider font-bold">
                                    <th className="p-5 border-b border-slate-200 dark:border-slate-700 min-w-[220px]">Typ Pojazdu</th>
                                    <th className="p-5 border-b border-slate-200 dark:border-slate-700 text-center bg-blue-50/50 dark:bg-blue-950/30 border-l border-r border-slate-200 dark:border-slate-700" colSpan={3}>
                                        <div className="flex items-center justify-center gap-2 text-primary font-extrabold text-base">
                                            <span className="material-symbols-outlined text-xl">videocam</span>
                                            PARKING MONITOROWANY
                                        </div>
                                    </th>
                                    <th className="p-5 border-b border-slate-200 dark:border-slate-700 text-center bg-purple-50/50 dark:bg-purple-950/30" colSpan={3}>
                                        <div className="flex items-center justify-center gap-2 text-purple-600 dark:text-purple-400 font-extrabold text-base">
                                            <span className="material-symbols-outlined text-xl">verified_user</span>
                                            PARKING STRZEŻONY (OCHRONA 24/7)
                                        </div>
                                    </th>
                                </tr>
                                <tr className="bg-slate-50 dark:bg-slate-900 text-xs text-slate-500 dark:text-slate-400 font-semibold border-b border-slate-200 dark:border-slate-800">
                                    <th className="p-3 pl-5"></th>
                                    <th className="p-3 text-center bg-blue-50/30 dark:bg-blue-950/20 border-l border-slate-200 dark:border-slate-800">Doba</th>
                                    <th className="p-3 text-center bg-blue-50/30 dark:bg-blue-950/20">Tydzień</th>
                                    <th className="p-3 text-center bg-blue-50/30 dark:bg-blue-950/20 border-r border-slate-200 dark:border-slate-800">Miesiąc</th>
                                    <th className="p-3 text-center bg-purple-50/30 dark:bg-purple-950/20">Doba</th>
                                    <th className="p-3 text-center bg-purple-50/30 dark:bg-purple-950/20">Tydzień</th>
                                    <th className="p-3 text-center bg-purple-50/30 dark:bg-purple-950/20">Miesiąc</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-sm">
                                
                                {/* ROW 1: OSOBOWE & MOTOCYKLE */}
                                <tr className="hover:bg-slate-50/80 dark:hover:bg-slate-800/50 transition-colors">
                                    <td className="p-5 font-bold text-tech-navy dark:text-white">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/40 text-primary flex items-center justify-center">
                                                <span className="material-symbols-outlined">directions_car</span>
                                            </div>
                                            <div>
                                                <div className="font-extrabold text-base">Osobowe</div>
                                                <div className="text-xs text-slate-500 dark:text-slate-400">motocykle, skutery</div>
                                            </div>
                                        </div>
                                    </td>
                                    
                                    {/* Monitorowany */}
                                    <td className="p-5 text-center font-black text-lg text-primary bg-blue-50/20 dark:bg-blue-950/10 border-l border-slate-200 dark:border-slate-800">
                                        30 zł
                                    </td>
                                    <td className="p-5 text-center font-bold text-slate-700 dark:text-slate-300 bg-blue-50/20 dark:bg-blue-950/10">
                                        150 zł
                                    </td>
                                    <td className="p-5 text-center font-bold text-slate-700 dark:text-slate-300 bg-blue-50/20 dark:bg-blue-950/10 border-r border-slate-200 dark:border-slate-800">
                                        250 zł
                                    </td>

                                    {/* Strzeżony */}
                                    <td className="p-5 text-center font-black text-lg text-purple-600 dark:text-purple-400 bg-purple-50/20 dark:bg-purple-950/10">
                                        70 zł
                                    </td>
                                    <td className="p-5 text-center font-bold text-slate-700 dark:text-slate-300 bg-purple-50/20 dark:bg-purple-950/10">
                                        350 zł
                                    </td>
                                    <td className="p-5 text-center font-bold text-slate-700 dark:text-slate-300 bg-purple-50/20 dark:bg-purple-950/10">
                                        500 zł
                                    </td>
                                </tr>

                                {/* ROW 2: BUSY, KAMPERY, AUTOKARY */}
                                <tr className="hover:bg-slate-50/80 dark:hover:bg-slate-800/50 transition-colors">
                                    <td className="p-5 font-bold text-tech-navy dark:text-white">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-900/40 text-orange-600 flex items-center justify-center">
                                                <span className="material-symbols-outlined">airport_shuttle</span>
                                            </div>
                                            <div>
                                                <div className="font-extrabold text-base">Busy & Dostawcze</div>
                                                <div className="text-xs text-slate-500 dark:text-slate-400">kampery, przyczepy, autokary, ciężarowe</div>
                                            </div>
                                        </div>
                                    </td>

                                    {/* Monitorowany */}
                                    <td className="p-5 text-center font-black text-lg text-primary bg-blue-50/20 dark:bg-blue-950/10 border-l border-slate-200 dark:border-slate-800">
                                        60 zł
                                    </td>
                                    <td className="p-5 text-center font-bold text-slate-700 dark:text-slate-300 bg-blue-50/20 dark:bg-blue-950/10">
                                        300 zł
                                    </td>
                                    <td className="p-5 text-center font-bold text-slate-700 dark:text-slate-300 bg-blue-50/20 dark:bg-blue-950/10 border-r border-slate-200 dark:border-slate-800">
                                        500 zł
                                    </td>

                                    {/* Strzeżony */}
                                    <td className="p-5 text-center font-black text-lg text-purple-600 dark:text-purple-400 bg-purple-50/20 dark:bg-purple-950/10">
                                        140 zł
                                    </td>
                                    <td className="p-5 text-center font-bold text-slate-700 dark:text-slate-300 bg-purple-50/20 dark:bg-purple-950/10">
                                        700 zł
                                    </td>
                                    <td className="p-5 text-center font-bold text-slate-700 dark:text-slate-300 bg-purple-50/20 dark:bg-purple-950/10">
                                        1000 zł
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>

                {/* INTERACTIVE PRICE CALCULATOR WIDGET */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-tech-navy via-slate-900 to-tech-navy rounded-3xl p-8 md:p-12 text-white shadow-2xl border border-slate-800"
                >
                    <div className="max-w-4xl mx-auto flex flex-col gap-8">
                        <div className="text-center">
                            <span className="px-3 py-1 bg-primary/20 text-primary border border-primary/30 text-xs font-bold uppercase rounded-full tracking-widest">
                                Szybki Kalkulator
                            </span>
                            <h2 className="text-3xl font-extrabold mt-3">Oblicz Koszt Postoju</h2>
                            <p className="text-slate-400 text-sm mt-1">Wybierz parametry, aby sprawdzić dokładną wycenę dla Twojego pojazdu.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            
                            {/* 1. Vehicle Category */}
                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">1. Typ Pojazdu</label>
                                <div className="grid grid-cols-1 gap-2">
                                    <button 
                                        onClick={() => setCalcCategory('osobowe')}
                                        className={`p-3.5 rounded-xl border text-left font-semibold text-sm flex items-center justify-between transition-all ${calcCategory === 'osobowe' ? 'bg-primary border-primary text-white shadow-lg' : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'}`}
                                    >
                                        <span className="flex items-center gap-2">
                                            <span className="material-symbols-outlined text-lg">directions_car</span>
                                            Osobowe / Motocykle
                                        </span>
                                        {calcCategory === 'osobowe' && <span className="material-symbols-outlined text-sm">check_circle</span>}
                                    </button>
                                    <button 
                                        onClick={() => setCalcCategory('duze')}
                                        className={`p-3.5 rounded-xl border text-left font-semibold text-sm flex items-center justify-between transition-all ${calcCategory === 'duze' ? 'bg-primary border-primary text-white shadow-lg' : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'}`}
                                    >
                                        <span className="flex items-center gap-2">
                                            <span className="material-symbols-outlined text-lg">airport_shuttle</span>
                                            Busy / Kampery / Autokary
                                        </span>
                                        {calcCategory === 'duze' && <span className="material-symbols-outlined text-sm">check_circle</span>}
                                    </button>
                                </div>
                            </div>

                            {/* 2. Parking Tier */}
                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">2. Standard Parkingu</label>
                                <div className="grid grid-cols-1 gap-2">
                                    <button 
                                        onClick={() => setCalcTier('monitorowany')}
                                        className={`p-3.5 rounded-xl border text-left font-semibold text-sm flex items-center justify-between transition-all ${calcTier === 'monitorowany' ? 'bg-primary border-primary text-white shadow-lg' : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'}`}
                                    >
                                        <span className="flex items-center gap-2">
                                            <span className="material-symbols-outlined text-lg">videocam</span>
                                            Monitorowany 24/7
                                        </span>
                                        {calcTier === 'monitorowany' && <span className="material-symbols-outlined text-sm">check_circle</span>}
                                    </button>
                                    <button 
                                        onClick={() => setCalcTier('strzezony')}
                                        className={`p-3.5 rounded-xl border text-left font-semibold text-sm flex items-center justify-between transition-all ${calcTier === 'strzezony' ? 'bg-purple-600 border-purple-600 text-white shadow-lg' : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'}`}
                                    >
                                        <span className="flex items-center gap-2">
                                            <span className="material-symbols-outlined text-lg">verified_user</span>
                                            Strzeżony (Ochrona 24/7)
                                        </span>
                                        {calcTier === 'strzezony' && <span className="material-symbols-outlined text-sm">check_circle</span>}
                                    </button>
                                </div>
                            </div>

                            {/* 3. Duration & Count */}
                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">3. Okres Postoju</label>
                                <div className="flex gap-2">
                                    {(['doba', 'tydzien', 'miesiack'] as const).map((unit) => (
                                        <button
                                            key={unit}
                                            onClick={() => setCalcUnit(unit)}
                                            className={`flex-1 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider border transition-all ${calcUnit === unit ? 'bg-white text-tech-navy border-white shadow-md' : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10'}`}
                                        >
                                            {unit === 'doba' ? 'Doba' : unit === 'tydzien' ? 'Tydzień' : 'Miesiąc'}
                                        </button>
                                    ))}
                                </div>
                                <div className="flex items-center gap-3 mt-2">
                                    <label className="text-xs text-slate-400 font-semibold">Liczba okresów:</label>
                                    <div className="flex items-center bg-white/10 border border-white/20 rounded-xl overflow-hidden">
                                        <button 
                                            onClick={() => setCalcCount(Math.max(1, calcCount - 1))}
                                            className="px-3 py-1.5 hover:bg-white/20 font-bold"
                                        >-</button>
                                        <span className="px-4 py-1.5 font-extrabold text-sm">{calcCount}</span>
                                        <button 
                                            onClick={() => setCalcCount(calcCount + 1)}
                                            className="px-3 py-1.5 hover:bg-white/20 font-bold"
                                        >+</button>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Calculated Total Banner */}
                        <div className="mt-4 p-6 bg-white/5 border border-white/10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-md">
                            <div>
                                <div className="text-xs text-slate-400 uppercase tracking-widest font-bold mb-1">Szacowany Koszt Łączny</div>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-4xl md:text-5xl font-black text-primary">{totalPrice} zł</span>
                                    <span className="text-slate-400 text-sm">
                                        ({unitPrice} zł × {calcCount} {calcUnit === 'doba' ? 'doba/y' : calcUnit === 'tydzien' ? 'tydzień/e' : 'miesiąc/e'})
                                    </span>
                                </div>
                            </div>
                            <button
                                onClick={() => setShowReservation(true)}
                                className="w-full md:w-auto px-8 py-4 bg-primary text-white font-extrabold rounded-xl shadow-lg hover:bg-blue-600 active:scale-95 transition-all flex items-center justify-center gap-2"
                            >
                                <span className="material-symbols-outlined">event_available</span>
                                Zarezerwuj to miejsce
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* HIGHLIGHT FEATURE CARDS */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    
                    {/* Card 1: Osobowe Monitorowane */}
                    <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-800 flex flex-col justify-between hover:shadow-xl transition-all">
                        <div>
                            <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-950/60 text-primary flex items-center justify-center mb-6">
                                <span className="material-symbols-outlined text-2xl">directions_car</span>
                            </div>
                            <h3 className="text-xl font-bold text-tech-navy dark:text-white mb-2">Osobowe Monitorowany</h3>
                            <p className="text-slate-500 text-sm mb-6">Idealne rozwiązanie na wakacje i krótkie wyjazdy na Mazury.</p>
                            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300 mb-8">
                                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-green-500 text-sm">check</span>Doba: <strong>30 zł</strong></li>
                                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-green-500 text-sm">check</span>Tydzień: <strong>150 zł</strong></li>
                                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-green-500 text-sm">check</span>Miesiąc: <strong>250 zł</strong></li>
                            </ul>
                        </div>
                        <button 
                            onClick={() => setShowReservation(true)}
                            className="w-full py-3 bg-slate-100 dark:bg-slate-800 hover:bg-primary hover:text-white text-slate-700 dark:text-slate-200 font-bold rounded-xl transition-colors"
                        >
                            Zarezerwuj
                        </button>
                    </div>

                    {/* Card 2: Osobowe Strzeżone */}
                    <div className="relative bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-2xl border-2 border-purple-500 flex flex-col justify-between transform md:-translate-y-2">
                        <div className="absolute top-0 right-0 bg-purple-600 text-white text-xs font-extrabold px-3 py-1 rounded-bl-xl rounded-tr-xl">
                            OCHRONA 24/7
                        </div>
                        <div>
                            <div className="w-12 h-12 rounded-2xl bg-purple-100 dark:bg-purple-950/60 text-purple-600 flex items-center justify-center mb-6">
                                <span className="material-symbols-outlined text-2xl">verified_user</span>
                            </div>
                            <h3 className="text-xl font-bold text-tech-navy dark:text-white mb-2">Osobowe Strzeżony</h3>
                            <p className="text-slate-500 text-sm mb-6">Pełna ochrona fizyczna oraz całodobowa kontrola wjazdu.</p>
                            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300 mb-8">
                                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-green-500 text-sm">check</span>Doba: <strong>70 zł</strong></li>
                                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-green-500 text-sm">check</span>Tydzień: <strong>350 zł</strong></li>
                                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-green-500 text-sm">check</span>Miesiąc: <strong>500 zł</strong></li>
                            </ul>
                        </div>
                        <button 
                            onClick={() => setShowReservation(true)}
                            className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl shadow-md transition-colors"
                        >
                            Wybież Strzeżony
                        </button>
                    </div>

                    {/* Card 3: Busy & Kampery */}
                    <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-800 flex flex-col justify-between hover:shadow-xl transition-all">
                        <div>
                            <div className="w-12 h-12 rounded-2xl bg-orange-100 dark:bg-orange-950/60 text-orange-600 flex items-center justify-center mb-6">
                                <span className="material-symbols-outlined text-2xl">airport_shuttle</span>
                            </div>
                            <h3 className="text-xl font-bold text-tech-navy dark:text-white mb-2">Busy, Kampery & Autokary</h3>
                            <p className="text-slate-500 text-sm mb-6">Dedykowane szerokie stanowiska dla gabarytów w Giżycku.</p>
                            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300 mb-8">
                                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-green-500 text-sm">check</span>Monitorowany od: <strong>60 zł / doba</strong></li>
                                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-green-500 text-sm">check</span>Strzeżony od: <strong>140 zł / doba</strong></li>
                                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-green-500 text-sm">check</span>Szerokie stanowiska XXL</li>
                            </ul>
                        </div>
                        <button 
                            onClick={() => setShowReservation(true)}
                            className="w-full py-3 bg-slate-100 dark:bg-slate-800 hover:bg-primary hover:text-white text-slate-700 dark:text-slate-200 font-bold rounded-xl transition-colors"
                        >
                            Zapytaj o Miejsce
                        </button>
                    </div>

                </div>

            </div>

            {/* Reservation Modal */}
            {showReservation && (
                <ReservationForm onClose={() => setShowReservation(false)} />
            )}
        </div>
    );
};
