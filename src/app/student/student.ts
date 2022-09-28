export class Student {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  dob: Date;
  gender: string;
  qualification: string;
  language: boolean;
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
