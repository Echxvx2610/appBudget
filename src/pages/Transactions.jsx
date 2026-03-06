import React, { useState } from 'react';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { ArrowDown, ArrowUp, Utensils, Zap, Car, Tags } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Transactions() {
    const [type, setType] = useState('gasto');
    const [amount, setAmount] = useState('0');

    const categories = [
        { id: 'comida', name: 'Alimentos', icon: <Utensils className="h-5 w-5" /> },
        { id: 'servicios', name: 'Servicios', icon: <Zap className="h-5 w-5" /> },
        { id: 'transporte', name: 'Transporte', icon: <Car className="h-5 w-5" /> },
        { id: 'otros', name: 'Otros', icon: <Tags className="h-5 w-5" /> },
    ];

    const handleAmount = (val) => {
        if (amount === '0') setAmount(val);
        else setAmount(amount + val);
    };

    const handleBackspace = () => {
        if (amount.length > 1) setAmount(amount.slice(0, -1));
        else setAmount('0');
    };

    return (
        <div className="max-w-lg mx-auto space-y-6">
            <div className="text-center">
                <h2 className="text-2xl font-bold text-dark">Nueva Transacción</h2>
            </div>

            <div className="flex p-1 bg-slate-100 rounded-lg">
                <button
                    onClick={() => setType('gasto')}
                    className={cn(
                        "flex-1 py-2 text-sm font-medium rounded-md flex items-center justify-center gap-2 transition-all",
                        type === 'gasto' ? "bg-white text-danger shadow-sm" : "text-mid hover:text-dark"
                    )}
                >
                    <ArrowDown className="h-4 w-4" />
                    Gasto
                </button>
                <button
                    onClick={() => setType('ingreso')}
                    className={cn(
                        "flex-1 py-2 text-sm font-medium rounded-md flex items-center justify-center gap-2 transition-all",
                        type === 'ingreso' ? "bg-white text-secondary shadow-sm" : "text-mid hover:text-dark"
                    )}
                >
                    <ArrowUp className="h-4 w-4" />
                    Ingreso
                </button>
            </div>

            <Card className="border-none shadow-none bg-transparent">
                <CardContent className="p-0 space-y-8">
                    {/* Amount Display */}
                    <div className="text-center py-6">
                        <span className={cn(
                            "text-6xl font-black tracking-tighter",
                            type === 'gasto' ? "text-danger" : "text-secondary"
                        )}>
                            ${amount}
                        </span>
                        <p className="text-mid mt-2 font-medium">USD</p>
                    </div>

                    {/* Categorias rápidas */}
                    {type === 'gasto' && (
                        <div className="grid grid-cols-4 gap-2">
                            {categories.map(cat => (
                                <div key={cat.id} className="flex flex-col items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
                                    <div className="h-12 w-12 rounded-full bg-slate-100 text-dark flex items-center justify-center">
                                        {cat.icon}
                                    </div>
                                    <span className="text-xs font-medium text-mid">{cat.name}</span>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Teclado numérico simulado */}
                    <div className="grid grid-cols-3 gap-3">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, '.', 0].map((num) => (
                            <Button
                                key={num}
                                variant="ghost"
                                className="h-14 text-2xl font-semibold bg-slate-50 hover:bg-slate-200"
                                onClick={() => handleAmount(num.toString())}
                            >
                                {num}
                            </Button>
                        ))}
                        <Button
                            variant="ghost"
                            className="h-14 text-lg font-semibold bg-slate-50 hover:bg-slate-200 text-danger"
                            onClick={handleBackspace}
                        >
                            ⌫
                        </Button>
                    </div>

                    <Button size="lg" className="w-full text-lg h-14">
                        Guardar {type === 'gasto' ? 'Gasto' : 'Ingreso'}
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}
