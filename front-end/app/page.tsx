import ChartOverview from "@/components/chart/indext";
import { Sales } from "@/components/sales";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign } from "lucide-react";

export default function Page() {
  return (
    <main className="sm:ml-14 p-4">
      <section className="grid grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl dark:text-zinc-50 text-gray-800 select-none">
                Total
              </CardTitle>
              <DollarSign className="ml-auto w-4 h-4" />
            </div>
            <CardDescription>
              Total de vendas realizadas no período.
            </CardDescription>
            <CardContent>
              <p className="text-3xl font-bold dark:text-zinc-50 text-gray-800 select-none">R$ 150.000,00</p>
            </CardContent>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl dark:text-zinc-50 text-gray-800 select-none">
                Novos Clientes
              </CardTitle>
              <DollarSign className="ml-auto w-4 h-4" />
            </div>
            <CardDescription>
              Novos cliente em 30 dias
            </CardDescription>
            <CardContent>
              <p className="text-3xl font-bold dark:text-zinc-50 text-gray-800 select-none">234</p>
            </CardContent>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl dark:text-zinc-50 text-gray-800 select-none">
                Novos Clientes
              </CardTitle>
              <DollarSign className="ml-auto w-4 h-4" />
            </div>
            <CardDescription>
              Novos cliente em 30 dias
            </CardDescription>
            <CardContent>
              <p className="text-3xl font-bold dark:text-zinc-50 text-gray-800 select-none">234</p>
            </CardContent>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl dark:text-zinc-50 text-gray-800 select-none">
                Novos Clientes
              </CardTitle>
              <DollarSign className="ml-auto w-4 h-4" />
            </div>
            <CardDescription>
              Novos cliente em 30 dias
            </CardDescription>
            <CardContent>
              <p className="text-3xl font-bold dark:text-zinc-50 text-gray-800 select-none">234</p>
            </CardContent>
          </CardHeader>
        </Card>
      </section>
      <section className="mt-4 flex flex-col md:flex-row gap-4">
        <ChartOverview />
        <Sales />
      </section>
    </main>
  )
}