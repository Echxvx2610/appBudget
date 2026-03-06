import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { CreditCard, Landmark, Smartphone, Plus } from 'lucide-react';

export default function Accounts() {
    const accounts = [
        {
            id: 1,
            name: 'Cuenta Principal',
            type: 'Débito',
            balance: '$15,431.89',
            icon: <Landmark className="h-6 w-6 text-primary" />,
            color: 'bg-blue-50',
        },
        {
            id: 2,
            name: 'Tarjeta Oro',
            type: 'Crédito',
            balance: '-$4,320.00',
            available: '$45,680.00 disponibles',
            icon: <CreditCard className="h-6 w-6 text-danger" />,
            color: 'bg-red-50',
        },
        {
            id: 3,
            name: 'Cuenta de Ahorros',
            type: 'Ahorro',
            balance: '$24,000.00',
            icon: <Landmark className="h-6 w-6 text-secondary" />,
            color: 'bg-green-50',
        },
        {
            id: 4,
            name: 'Wallet Digital',
            type: 'Billetera',
            balance: '$1,200.00',
            icon: <Smartphone className="h-6 w-6 text-purple-600" />,
            color: 'bg-purple-50',
        },
    ];

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-dark">Tus Cuentas</h2>
                    <p className="text-mid mt-1">Gestiona tus cuentas y tarjetas desde un solo lugar.</p>
                </div>
                <Button className="hidden md:flex gap-2">
                    <Plus className="h-4 w-4" /> Agregar Cuenta
                </Button>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                {accounts.map((account) => (
                    <Card key={account.id} className="hover:border-primary/50 transition-colors cursor-pointer">
                        <CardContent className="p-6 flex items-center">
                            <div className={`h-12 w-12 rounded-full flex items-center justify-center ${account.color}`}>
                                {account.icon}
                            </div>
                            <div className="ml-4 flex-1">
                                <h3 className="font-semibold text-lg">{account.name}</h3>
                                <p className="text-sm text-mid">{account.type}</p>
                            </div>
                            <div className="text-right">
                                <div className={`text-xl font-bold ${account.type === 'Crédito' ? 'text-danger' : 'text-dark'}`}>
                                    {account.balance}
                                </div>
                                {account.available && (
                                    <p className="text-xs text-mid mt-1">{account.available}</p>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="md:hidden pt-4 flex justify-center">
                <Button className="w-full gap-2" size="lg">
                    <Plus className="h-4 w-4" /> Agregar Cuenta
                </Button>
            </div>
        </div>
    );
}
