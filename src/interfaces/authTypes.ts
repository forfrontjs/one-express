// types.ts
export interface EmailConfirmation {
  id: string;
  dateCreated: string;
  dateUpdated: string;
  code: string;
  isActive: boolean;
  confirmationStatus: number;
  expirationDateTime: string | null;
  attempts: number;
}

export interface User {
  id: string;
  dateCreated: string;
  dateUpdated: string;
  name: string;
  surname: string | null;
  personal_code: string;
  phone: string;
  dateOfBirth: string | null;
  residenceCity: string;
  email: string;
  password: string;
  status: number;
  createdAt: string;
  emailConfirmation: EmailConfirmation;
  storage: any;
  products: any[];
}

export type { User as authUser };

export interface AuthResponseLocal {
  id: string;
  name: string;
  surname?: string;
  personal_code: string;
  phone: string;
  dateOfBirth?: string;
  residenceCity: string;
  email: string;
}

// Функция сопоставления
// Функция сопоставления
export const mapAuthResponseToUser = (
  authResponse: AuthResponseLocal
): User => {
  return {
    id: authResponse.id,
    dateCreated: new Date().toISOString(),
    dateUpdated: new Date().toISOString(),
    name: authResponse.name,
    surname: authResponse.surname || null,
    personal_code: authResponse.personal_code,
    phone: authResponse.phone,
    dateOfBirth: authResponse.dateOfBirth || null,
    residenceCity: authResponse.residenceCity,
    email: authResponse.email,
    password: "",
    status: 1,
    createdAt: new Date().toISOString(),
    emailConfirmation: {
      id: "",
      dateCreated: new Date().toISOString(),
      dateUpdated: new Date().toISOString(),
      code: "",
      isActive: false,
      confirmationStatus: 0,
      expirationDateTime: null,
      attempts: 0,
    },
    storage: null,
    products: [],
  };
};
