import React from 'react';

interface CartaoProps {
  titulo?: string;
  children: React.ReactNode;
  className?: string;
}

export function Cartao({ titulo, children, className }: CartaoProps) {
  return (
    <div className={`cartao ${className || ''}`}>
      {titulo && <div className="cartao-titulo">{titulo}</div>}
      <div className="cartao-conteudo">{children}</div>
    </div>
  );
} 