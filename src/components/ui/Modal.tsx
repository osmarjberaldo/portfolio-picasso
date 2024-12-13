import React from 'react';

interface ModalProps {
  aberto: boolean;
  aoFechar: () => void;
  titulo?: string;
  children: React.ReactNode;
}

export function Modal({ aberto, aoFechar, titulo, children }: ModalProps) {
  if (!aberto) return null;

  return (
    <div className="modal-fundo" onClick={aoFechar}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        {titulo && <div className="modal-titulo">{titulo}</div>}
        <div className="modal-conteudo">{children}</div>
      </div>
    </div>
  );
} 