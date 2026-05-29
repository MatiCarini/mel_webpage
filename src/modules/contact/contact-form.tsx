"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";
import type { ContactFormData } from "@/types";

const contactSchema = z.object({
  nombre: z.string().min(2, "Nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  telefono: z.string().optional(),
  mensaje: z.string().min(10, "Mensaje debe tener al menos 10 caracteres"),
});

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data: ContactFormData) {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Error al enviar");

      toast.success("Mensaje enviado correctamente. Te contactaremos pronto.");
      reset();
    } catch {
      toast.error("Error al enviar el mensaje. Intentá de nuevo.");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <Input
          {...register("nombre")}
          placeholder="Nombre completo"
          className="bg-white border-[#e0e2ed] focus:border-[#2aaf62] text-[#01021d] placeholder:text-[#4a4f6a]/50"
        />
        {errors.nombre && (
          <p className="text-red-500 text-xs mt-1">{errors.nombre.message}</p>
        )}
      </div>
      <div>
        <Input
          {...register("email")}
          type="email"
          placeholder="Correo electrónico"
          className="bg-white border-[#e0e2ed] focus:border-[#2aaf62] text-[#01021d] placeholder:text-[#4a4f6a]/50"
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
        )}
      </div>
      <div>
        <Input
          {...register("telefono")}
          type="tel"
          placeholder="Teléfono (opcional)"
          className="bg-white border-[#e0e2ed] focus:border-[#2aaf62] text-[#01021d] placeholder:text-[#4a4f6a]/50"
        />
      </div>
      <div>
        <Textarea
          {...register("mensaje")}
          placeholder="Describí tu proyecto o consulta..."
          rows={5}
          className="bg-white border-[#e0e2ed] focus:border-[#2aaf62] text-[#01021d] placeholder:text-[#4a4f6a]/50 resize-none"
        />
        {errors.mensaje && (
          <p className="text-red-500 text-xs mt-1">{errors.mensaje.message}</p>
        )}
      </div>
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#2aaf62] text-white hover:bg-[#2aaf62]/90 font-semibold accent-glow-sm hover:accent-glow transition-all duration-300"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Enviando...
          </>
        ) : (
          "Enviar Consulta"
        )}
      </Button>
    </form>
  );
}
