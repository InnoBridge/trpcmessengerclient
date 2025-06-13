interface Chat {
  chatId: string;
  connectionId: string;
  userId1: string;
  userId2: string;
  createdAt: number;
  updatedAt?: number;
};

interface Message {
  messageId: string;
  chatId: string;
  senderId: string;
  content: string;
  createdAt: number;
};

interface ChatMessagePair {
    chat: Chat;
    message: Message;
};


export {
    Chat,
    Message,
    ChatMessagePair
};
