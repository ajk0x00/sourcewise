const API_BACKEND = import.meta.env.VITE_API_BACKEND;

export const sendMessage = (
    message, onMessage,
    onClose = () => {}, 
    onError = err => console.log(err)
) => {
  const url = `${API_BACKEND}/ask?question=${encodeURIComponent(message)}`;
  const eventSource = new EventSource(url);

  eventSource.onmessage = (event) => {
    if (onMessage) {
        console.log(event.data);
        onMessage(JSON.parse(event.data));
    }
  };

  eventSource.onerror = (error) => {
    if (onError) {
      onError(error);
    }
    eventSource.close();
  };

  eventSource.onclose = () => {
    console.log('Connection closed by server');
    onClose();
  };
  return eventSource;
};