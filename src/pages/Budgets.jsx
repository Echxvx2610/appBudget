import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Plus } from 'lucide-react';

export default function Budgets() {
    const budgets = [
        { name: 'Alimentación', spent: 3450, total: 4000, color: 'bg-danger' },
        { name: 'Transporte', spent: 1200, total: 2000, color: 'bg-primary' },
        { name: 'Entretenimiento', spent: 800, total: 1500, color: 'bg-secondary' },
        { name: 'Servicios', spent: 1800, total: 2000, color: 'bg-alert' },
    ];

    const goals = [
        { name: 'Vacaciones Cancún', saved: 12000, target: 30000, date: '15 Dic 2026' },
        { name: 'Fondo Emergencia', saved: 25000, target: 50000, date: 'Sin fecha límite' },
    ];

    const calcPercent = (value, total) => Math.min(Math.round((value / total) * 100), 100);

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-dark">Ahorros y Metas</h2>
                    <p className="text-mid mt-1">Controla lo que gastas y planifica tu futuro.</p>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {/* Presupuestos Mensuales */}
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle>Presupuestos de Marzo</CardTitle>
                        <Button variant="ghost" size="icon"><Plus className="h-5 w-5" /></Button>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        {budgets.map((b) => {
                            const p = calcPercent(b.spent, b.total);
                            return (
                                <div key={b.name} className="space-y-2">
                                    <div className="flex justify-between text-sm font-medium">
                                        <span>{b.name}</span>
                                        <span className="text-mid font-normal">${b.spent} / ${b.total}</span>
                                    </div>
                                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                        <div
                                            className={`h-full ${b.color} transition-all duration-500`}
                                            style={{ width: `${p}%` }}
                                        />
                                    </div>
                                    <p className="text-xs text-mid text-right">{p}% utilizado</p>
                                </div>
                            );
                        })}
                    </CardContent>
                </Card>

                {/* Metas de Ahorro */}
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle>Tus Metas Activas</CardTitle>
                        <Button variant="ghost" size="icon"><Plus className="h-5 w-5 text-secondary" /></Button>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        {goals.map((g) => {
                            const p = calcPercent(g.saved, g.target);
                            return (
                                <div key={g.name} className="p-4 border border-slate-100 rounded-lg hover:border-secondary/30 transition-colors">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h4 className="font-semibold">{g.name}</h4>
                                            <p className="text-xs text-mid mt-1">META: {g.date}</p>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-lg font-bold text-secondary">${g.saved}</span>
                                            <span className="text-sm text-mid ml-1">/ ${g.target}</span>
                                        </div>
                                    </div>
                                    <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden shadow-inner">
                                        <div
                                            className="h-full bg-secondary transition-all duration-1000 ease-out"
                                            style={{ width: `${p}%` }}
                                        />
                                    </div>
                                    <div className="mt-2 text-xs font-semibold text-secondary text-right">{p}% completado</div>
                                </div>
                            );
                        })}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
