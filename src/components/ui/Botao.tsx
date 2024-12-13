import React, { ButtonHTMLAttributes } from 'react';

interface BotaoProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variante?: 'primario' | 'secundario' | 'contorno';
  tamanho?: 'pequeno' | 'medio' | 'grande';
  children: React.ReactNode;
}

export function Botao({ 
  variante = 'primario', 
  tamanho = 'medio', 
  children, 
  className,
  ...props 
}: BotaoProps) {
  return (
    <button
      className={`botao botao-${variante} botao-${tamanho} ${className || ''}`}
      {...props}
    >
      {children}
    </button>
  );
} 