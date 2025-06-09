import { EmailAddress } from "@/models/emails";

interface User {
  id: string;
  username: string | null;
  firstName: string | null;
  lastName: string | null;
  imageUrl: string;
  emailAddresses: EmailAddress[];
  createdAt: number;
  updatedAt: number;
};

export {
    User
};