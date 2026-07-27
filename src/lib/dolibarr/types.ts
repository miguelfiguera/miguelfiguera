// Tercero de Dolibarr (Cliente / Lead)
export interface DolibarrThirdParty {
  id?: number;
  name: string;
  email?: string;
  phone?: string;
  client: number; // 0=no cliente, 1=cliente, 2=prospecto
  code_client?: string;
  ref_ext?: string; // referencia externa — etiqueta de origen (MDEV:<slug>)
  note_private?: string;
  // Extrafields: options_origen_negocio, options_landing_form
  array_options?: Record<string, string>;
}

// Contacto de Dolibarr
export interface DolibarrContact {
  id?: number;
  socid: number; // ID del tercero padre
  firstname: string;
  lastname: string;
  email?: string;
  phone_mobile?: string;
  note_private?: string;
}

// Payload que envía el formulario de contacto de la web
export interface ContactFormInput {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  /** Honeypot anti-spam: si viene con valor, es un bot. */
  website?: string;
}
