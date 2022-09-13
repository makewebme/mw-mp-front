export interface I_UserData  {
  id?: number | null
  login?: string | null
  email?: string | null
  phone?: string | null
  nameFirst?: string | null
  nameLast?: string | null
  namePatronymic?: string | null
  displayName: string | null,
  birthDate?: string | null
  gender?: E_Gender | null
}

enum E_Gender {
  Male = 'm',
  Female = 'f',
}
