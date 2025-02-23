"use client";
import { useState } from "react";
import Card from "../components/Card";
import Input from "../components/Input";
import PageHeader from "../components/PageHeader";
import ResultDisplay from "../components/ResultDisplay";

import {
  calculateTax,
  sumNonMultiplesOf13,
  vectorSubstitution,
} from "../utils/calculations";

export default function Home() {
  const [salary, setSalary] = useState("3002.00");
  const [rangeStart, setRangeStart] = useState("100");
  const [rangeEnd, setRangeEnd] = useState("200");
  const [vector] = useState([1, -5, 0, -3, 9, 8, -7, 4, 2, -1]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-12">
        <PageHeader
          title="Desafio Técnico"
          description="Demonstração interativa das soluções implementadas para os desafios propostos."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card title="Cálculo de Imposto">
            <div className="space-y-4">
              <Input
                label="Salário"
                type="number"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                step="0.01"
              />
              <ResultDisplay
                label="Imposto"
                value={calculateTax(parseFloat(salary))}
              />
            </div>
          </Card>

          <Card title="Soma Não Múltiplos de 13">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input
                  label="Início"
                  type="number"
                  value={rangeStart}
                  onChange={(e) => setRangeStart(e.target.value)}
                />
                <Input
                  label="Fim"
                  type="number"
                  value={rangeEnd}
                  onChange={(e) => setRangeEnd(e.target.value)}
                />
              </div>
              <ResultDisplay
                label="Soma"
                value={sumNonMultiplesOf13(
                  parseInt(rangeStart),
                  parseInt(rangeEnd)
                )}
              />
            </div>
          </Card>

          <Card title="Substituição em Vetor">
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-2">Vetor original:</p>
                <p className="font-mono text-sm">[{vector.join(", ")}]</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-2">Resultado:</p>
                <div className="grid grid-cols-2 gap-2">
                  {vectorSubstitution(vector).map(({ index, value }) => (
                    <div key={index} className="font-mono text-sm">
                      X[{index}] = {value}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
