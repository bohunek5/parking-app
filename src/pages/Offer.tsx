import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Offer = () => {
    const pricingPlans = [
        {
            title: "Osobowe Monitorowany",
            icon: "directions_car",
            features: [
                "Samochody osobowe & motocykle",
                "Wideo-monitoring HD 24/7",
                "Wjazd i wyjazd całodobowy",
                "Stawka dobowy postój: 30 zł",
                "Stawka za tydzień: 150 zł"
            ],
            price: "30 PLN",
            period: "/ doba",
            highlight: false
        },
        {
            title: "Osobowe Strzeżony 24/7",
            icon: "verified_user",
            features: [
                "Samochody osobowe & motocykle",
                "Całodobowa ochrona fizyczna",
                "Gwarantowany bezpośredni nadzór",
                "Stawka dobowy postój: 70 zł",
                "Stawka za tydzień: 350 zł"
            ],
            price: "70 PLN",
            period: "/ doba",
            highlight: true
        },
        {
            title: "Busy, Kampery & Autokary",
            icon: "airport_shuttle",
            features: [
                "Kampery, przyczepy, busy, ciężarowe",
                "Stanowiska wielkogabarytowe XXL",
                "Monitorowany od 60 zł / doba",
                "Strzeżony od 140 zł / doba",
                "Opcja abonamentu miesięcznego"
            ],
            price: "od 60 PLN",
            period: "/ doba",
            highlight: false
        }
    ];

    const vehicleTypes = [
        { name: "Osobowe, Motocykle & Skutery", priceMonitored: "30 PLN", priceGuarded: "70 PLN", icon: "directions_car" },
        { name: "Busy & Dostawcze", priceMonitored: "60 PLN", priceGuarded: "140 PLN", icon: "local_shipping" },
        { name: "Kampery & Przyczepy", priceMonitored: "60 PLN", priceGuarded: "140 PLN", icon: "rv_hookup" },
        { name: "Autokary & Ciężarowe", priceMonitored: "60 PLN", priceGuarded: "140 PLN", icon: "directions_bus" },
    ];

    return (
        <div className="w-full bg-slate-50 dark:bg-slate-950 min-h-screen pb-20">
            {/* Header */}
            <section className="bg-tech-navy pt-32 pb-20 px-6 rounded-b-[3rem] shadow-2xl mb-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-5">
                    <span className="material-symbols-outlined text-[300px] text-white">sell</span>
                </div>
                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <span className="px-4 py-1.5 bg-primary/20 text-primary border border-primary/30 font-bold text-xs uppercase tracking-widest rounded-full mb-4 inline-block">
                        Oferta Parking24 Giżycko
                    </span>
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-display font-black text-4xl md:text-6xl text-white mb-6"
                    >
                        Elastyczne Pakiety Parkowania
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-300 text-lg max-w-2xl mx-auto"
                    >
                        Pojedyncza doba, tydzień urlopowy czy stały abonament miesięczny na Mazurach. Wybierz dogodną opcję z monitoringiem lub ochroną.
                    </motion.p>
                </div>
            </section>

            {/* Main Pricing Cards */}
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 -mt-20">
                {pricingPlans.map((plan, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className={`relative p-8 rounded-3xl border ${plan.highlight ? 'bg-gradient-to-b from-purple-700 to-purple-900 text-white border-purple-500 shadow-2xl shadow-purple-900/40 scale-105 z-10' : 'bg-white dark:bg-slate-900 text-tech-navy dark:text-white border-slate-200 dark:border-slate-800 shadow-xl'} flex flex-col`}
                    >
                        {plan.highlight && (
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-amber-400 text-slate-950 px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest shadow-lg">
                                NAJPOPULARNIEJSZY
                            </div>
                        )}
                        <div className={`p-3.5 rounded-2xl w-fit mb-6 ${plan.highlight ? 'bg-white/20' : 'bg-primary/10 text-primary'}`}>
                            <span className="material-symbols-outlined text-3xl">{plan.icon}</span>
                        </div>
                        <h3 className={`text-xl font-extrabold mb-2 ${plan.highlight ? 'text-white' : 'text-tech-navy dark:text-white'}`}>{plan.title}</h3>
                        <div className="flex items-baseline gap-1 mb-8">
                            <span className="text-4xl font-black">{plan.price}</span>
                            <span className={`text-sm ${plan.highlight ? 'text-purple-200' : 'text-slate-400'}`}>{plan.period}</span>
                        </div>
                        <ul className="space-y-4 mb-8 flex-1">
                            {plan.features.map((feature, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm">
                                    <span className={`material-symbols-outlined text-lg ${plan.highlight ? 'text-amber-400' : 'text-green-500'}`}>check_circle</span>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <Link 
                            to="/cennik"
                            className={`w-full py-4 rounded-xl font-extrabold text-center transition-all ${plan.highlight ? 'bg-white text-purple-900 hover:bg-slate-100 shadow-lg' : 'bg-tech-navy text-white hover:bg-primary'}`}
                        >
                            Zobacz Szczegółowy Cennik
                        </Link>
                    </motion.div>
                ))}
            </div>

            {/* Detailed Vehicle Table Summary */}
            <div className="max-w-4xl mx-auto px-6 mb-20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-tech-navy dark:text-white mb-4">W zestawieniu dobowym</h2>
                    <p className="text-slate-500">Porównanie stawek dobowych dla poszczególnych typów pojazdów</p>
                </div>
                <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-800 divide-y divide-slate-100 dark:divide-slate-800">
                    {vehicleTypes.map((vehicle, index) => (
                        <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between p-6 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors gap-4">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950 text-primary flex items-center justify-center">
                                    <span className="material-symbols-outlined">{vehicle.icon}</span>
                                </div>
                                <span className="font-extrabold text-lg text-tech-navy dark:text-white">{vehicle.name}</span>
                            </div>
                            <div className="flex items-center gap-6 text-right">
                                <div>
                                    <div className="text-xs text-slate-400 uppercase font-bold">Monitorowany</div>
                                    <div className="font-black text-lg text-primary">{vehicle.priceMonitored}</div>
                                </div>
                                <div className="h-8 w-px bg-slate-200 dark:bg-slate-800"></div>
                                <div>
                                    <div className="text-xs text-purple-500 uppercase font-bold">Strzeżony 24/7</div>
                                    <div className="font-black text-lg text-purple-600 dark:text-purple-400">{vehicle.priceGuarded}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-primary to-blue-700 py-16 px-6 rounded-3xl max-w-7xl mx-auto shadow-2xl">
                <div className="max-w-4xl mx-auto text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-black mb-4">Masz pytania dotyczące rezerwacji w Giżycku?</h2>
                    <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                        Skontaktuj się z naszą obsługą. Pomagamy dobrać najlepsze miejsce dla aut osobowych, kamperów, łodzi i flot.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link to="/kontakt" className="px-8 py-4 bg-white text-primary font-extrabold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                            Skontaktuj się z nami
                        </Link>
                        <a href="tel:+48607241090" className="px-8 py-4 bg-black/20 text-white font-extrabold rounded-xl border border-white/20 hover:bg-black/30 transition-all flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined">call</span>
                            +48 607 241 090
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};
