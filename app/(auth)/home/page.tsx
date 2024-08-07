"use client"

import { Card, CardHeader } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"



const chartData = [
    { month: "January", Reimbursements: 186, Freelance: 80, Prizepool: 70 },
    { month: "February", Reimbursements: 186, Freelance: 80, Prizepool: 70 },
    { month: "March", Reimbursements: 186, Freelance: 80, Prizepool: 70 },
    { month: "April", Reimbursements: 186, Freelance: 80, Prizepool: 70 },
    { month: "May", Reimbursements: 186, Freelance: 80, Prizepool: 70 },
    { month: "June", desktop: 214, Reimbursements: 186, Freelance: 80, Prizepool: 70 },
]

const chartConfig = {
    Reimbursements: {
        label: "Reimbursements",
        color: "#2563eb",
    },
    Freelance: {
        label: "Freelance",
        color: "#60a5fa",
    },
    Prizepool: {
        label: "Prizepool",
        color: "#686cec",
    },
} satisfies ChartConfig

const invoiceData = [
    {
        invoiceNumber: "Dnsaw2",
        status: "Manager Approved",
        InvoiceAmount: 1500.00,
        CreatedAt: "Jul 7 2024",
        type:"Freelance"
    },
    {
        invoiceNumber: "Ppnrsa",
        status: "User Consent",
        InvoiceAmount: 25000.00,
        CreatedAt: "Jul 10 2024",
        type:"Prizepool"
    },
    {
        invoiceNumber: "Dnsaw2",
        status: "Manager Approved",
        InvoiceAmount: 1500.00,
        CreatedAt: "Jul 7 2024",
        type:"Reimbursement"
    },
]

export default function Home() {
    return (
      <div className="relative min-h-full bg-slate-200 p-4 flex flex-col">
        <Card className="flex flex-col flex-grow p-8 mb-4">
          <CardHeader>
            <h2 className="text-lg font-bold">Invoice Reports</h2>
          </CardHeader>
          <ChartContainer config={chartConfig} className="flex-grow h-[200px] w-full">
            <BarChart accessibilityLayer data={chartData}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Bar dataKey="Reimbursements" fill="var(--color-Reimbursements)" radius={4} />
              <Bar dataKey="Freelance" fill="var(--color-Freelance)" radius={4} />
              <Bar dataKey="Prizepool" fill="var(--color-Prizepool)" radius={4} />
            </BarChart>
          </ChartContainer>
        </Card>
        <Card className="flex flex-col flex-grow p-4 w-full">
          <CardHeader>
            <h2 className="text-lg font-bold">Recent Invoices</h2>
          </CardHeader>
          <div className="flex-grow overflow-x-auto">
            <Table className="w-full h-full overflow-y-scroll scrollbar-thin overflow-hidden">
              <TableCaption>A list of recent invoices.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-auto">Invoice Number</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Created At</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Invoice Type</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoiceData.map((invoice, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{invoice.invoiceNumber}</TableCell>
                    <TableCell>{invoice.status}</TableCell>
                    <TableCell>{invoice.CreatedAt}</TableCell>
                    <TableCell>{`Rs. ${invoice.InvoiceAmount}`}</TableCell>
                    <TableCell>{invoice.type}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>
      </div>
    );
  }
  
  