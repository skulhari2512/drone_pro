import { useToast } from "../../hooks/use-toast"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`rounded-lg p-4 shadow-lg ${
            toast.variant === "destructive" 
              ? "bg-red-600 text-white" 
              : "bg-white text-gray-900 border"
          }`}
        >
          {toast.title && <div className="font-semibold">{toast.title}</div>}
          {toast.description && <div className="mt-1 text-sm">{toast.description}</div>}
        </div>
      ))}
    </div>
  )
}