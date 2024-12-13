import React, { InputHTMLAttributes } from 'react';

interface CaixaEntradaProps extends InputHTMLAttributes<HTMLInputElement> {
  rotulo?: string;
  mensagemErro?: string;
}

export function CaixaEntrada({ 
  rotulo, 
  mensagemErro,
  className,
  ...props 
}: CaixaEntradaProps) {
  return (
    <div className="grupo-entrada">
      {rotulo && <label className="rotulo">{rotulo}</label>}
      <input className={`entrada ${className || ''}`} {...props} />
      {mensagemErro && <span className="erro">{mensagemErro}</span>}
    </div>
  );
} 