import toast from "react-hot-toast"

const notificationProperties =  {
    icon: '👏',
    style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
    },
}

export const notification = (message: string, type: "error" | "success" | "loading") => {
    if (type === "error") toast.error(message, notificationProperties)
    if (type === "success") toast.success(message, notificationProperties)
    if (type === "loading") toast.loading(message, notificationProperties)
}