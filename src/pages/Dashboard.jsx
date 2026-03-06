import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ArrowUpRight, ArrowDownRight, Wallet, CreditCard, PiggyBank } from 'lucide-react';

const data = [
    { name: '1 Mar', ingresos: 4000, gastos: 2400 },
    { name: '5 Mar', ingresos: 3000, gastos: 1398 },
    { name: '10 Mar', ingresos: 2000, gastos: 9800 },
    { name: '15 Mar', ingresos: 2780, gastos: 3908 },
    { name: '20 Mar', ingresos: 1890, gastos: 4800 },
    { name: '25 Mar', ingresos: 2390, gastos: 3800 },
    { name: '30 Mar', ingresos: 3490, gastos: 4300 },
];

export default function Dashboard() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-dark">Hola, Usuario 👋</h2>
                    <p className="text-mid mt-1">Aquí tienes el resumen de tu salud financiera.</p>
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card className="bg-gradient-to-br from-primary to-blue-600 text-white border-none shadow-lg transform transition-transform hover:-translate-y-1">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-blue-100">Saldo Neto Total</CardTitle>
                        <Wallet className="h-5 w-5 text-blue-100" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold">$45,231.89</div>
                        <p className="text-xs text-blue-200 mt-1 flex items-center">
                            <ArrowUpRight className="h-4 w-4 mr-1" />
                            +20.1% respecto al mes pasado
                        </p>
                    </CardContent>
                </Card>

                <Card className="transform transition-transform hover:-translate-y-1">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-mid">Gastos del Mes</CardTitle>
                        <CreditCard className="h-5 w-5 text-danger" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-dark">$12,450.00</div>
                        <p className="text-xs text-mid mt-1 flex items-center">
                            <span className="text-danger flex items-center font-medium mr-1">
                                <ArrowUpRight className="h-4 w-4" /> 4%
                            </span>
                            más que el mes pasado
                        </p>
                    </CardContent>
                </Card>

                <Card className="transform transition-transform hover:-translate-y-1">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-mid">Ahorros Totales</CardTitle>
                        <PiggyBank className="h-5 w-5 text-secondary" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-dark">$25,000.00</div>
                        <p className="text-xs text-mid mt-1 flex items-center">
                            <span className="text-secondary flex items-center font-medium mr-1">
                                <ArrowUpRight className="h-4 w-4" /> 12%
                            </span>
                            más que el mes pasado
                        </p>
                    </CardContent>
                </Card>

                <Card className="transform transition-transform hover:-translate-y-1">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-mid">Salud Financiera</CardTitle>
                        <div className="h-5 w-5 rounded-full bg-secondary/20 flex items-center justify-center">
                            <div className="h-2.5 w-2.5 rounded-full bg-secondary" />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-secondary">Excelente</div>
                        <p className="text-xs text-mid mt-1">
                            Score: 85/100
                        </p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-1 lg:col-span-4">
                    <CardHeader>
                        <CardTitle>Flujo de Caja Mensual</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-0">
                        <div className="h-[300px] w-full mt-4">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart
                                    data={data}
                                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                                >
                                    <defs>
                                        <linearGradient id="colorIngresos" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#00C48C" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="#00C48C" stopOpacity={0} />
                                        </linearGradient>
                                        <linearGradient id="colorGastos" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#FF3B5C" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="#FF3B5C" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <XAxis dataKey="name" stroke="#64748B" fontSize={12} tickLine={false} axisLine={false} />
                                    <YAxis stroke="#64748B" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}`} />
                                    <Tooltip
                                        contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                                        itemStyle={{ fontWeight: '500' }}
                                    />
                                    <Area type="monotone" dataKey="ingresos" stroke="#00C48C" strokeWidth={2} fillOpacity={1} fill="url(#colorIngresos)" />
                                    <Area type="monotone" dataKey="gastos" stroke="#FF3B5C" strokeWidth={2} fillOpacity={1} fill="url(#colorGastos)" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>

                <Card className="col-span-1 lg:col-span-3">
                    <CardHeader>
                        <CardTitle>Transacciones Recientes</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-6">
                            {[
                                { name: 'Supermercado', amount: '-$1,200.00', date: 'Hoy', icon: '🛒', color: 'bg-orange-100 text-orange-600' },
                                { name: 'Netflix', amount: '-$199.00', date: 'Ayer', icon: '🎬', color: 'bg-red-100 text-red-600' },
                                { name: 'Nómina', amount: '+$15,000.00', date: '15 Mar', icon: '💰', color: 'bg-green-100 text-green-600' },
                                { name: 'Gasolina', amount: '-$800.00', date: '14 Mar', icon: '⛽', color: 'bg-blue-100 text-blue-600' },
                                { name: 'Restaurante', amount: '-$540.00', date: '12 Mar', icon: '🍔', color: 'bg-purple-100 text-purple-600' },
                            ].map((tx, i) => (
                                <div key={i} className="flex items-center">
                                    <div className={`h-10 w-10 flex items-center justify-center rounded-full ${tx.color} text-xl`}>
                                        {tx.icon}
                                    </div>
                                    <div className="ml-4 space-y-1">
                                        <p className="text-sm font-medium leading-none">{tx.name}</p>
                                        <p className="text-sm text-mid">{tx.date}</p>
                                    </div>
                                    <div className={`ml-auto font-medium ${tx.amount.startsWith('+') ? 'text-secondary' : 'text-dark'}`}>
                                        {tx.amount}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
