import { signIn } from "@/auth"
import { redirect } from "next/navigation"
import { auth } from "@/auth"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AuthError } from "next-auth"
import { ShieldCheck, Mail, Lock, AlertCircle, ArrowLeft, Globe } from "lucide-react"

export default async function LoginPage(props: { searchParams: Promise<{ error?: string }> }) {
  let session = null
  try {
    session = await auth()
  } catch (error) {
    session = null
  }
  if (session) redirect("/admin")

  const searchParams = await props.searchParams

  return (
    <div className="relative flex min-h-svh flex-col items-center justify-center bg-muted/40 p-4 md:p-8 font-sans">
      {/* Dynamic Background Accents */}
      <div className="absolute -top-40 -left-40 size-96 rounded-full bg-red-100/50 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 size-96 rounded-full bg-rose-100/50 blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-md space-y-6">
        {/* Header & Brand Logo */}
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#A30D11] to-[#70080B] text-white shadow-lg shadow-red-900/20 ring-4 ring-red-50">
            <Globe className="size-7" />
          </div>

          <div className="space-y-1">
            <h1 className="text-2xl font-bold tracking-tight text-foreground font-heading">
              Go Global Admin
            </h1>
            <p className="text-xs text-muted-foreground">
              Portal Manajemen Program & Konten
            </p>
          </div>
        </div>

        {/* Login Card (Official Shadcn UI Card) */}
        <Card className="w-full shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-xl">Masuk ke Akun</CardTitle>
            <CardDescription>
              Masukkan email dan kata sandi admin Anda
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            {searchParams?.error && (
              <Alert variant="destructive">
                <AlertCircle className="size-4" />
                <AlertTitle>Gagal Masuk</AlertTitle>
                <AlertDescription>
                  Email atau password yang Anda masukkan tidak sesuai. Silakan coba lagi.
                </AlertDescription>
              </Alert>
            )}

            <form
              action={async (formData) => {
                "use server"
                try {
                  await signIn("credentials", formData, { redirectTo: "/admin" })
                } catch (error) {
                  if (error instanceof AuthError) {
                    if (error.type === "CredentialsSignin") {
                      redirect("/admin/login?error=CredentialsSignin")
                    }
                  }
                  throw error
                }
              }}
              className="space-y-4"
            >
              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email">Email Admin</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="admin@goglobal.com"
                    required
                    className="!pl-9 h-10"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none" />
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="••••••••••••"
                    required
                    className="!pl-9 h-10"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-[#A30D11] hover:bg-[#8A0B0E] text-white cursor-pointer mt-2"
              >
                <ShieldCheck className="size-4 mr-2" />
                Masuk ke Dashboard
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Footer info & Back Link */}
        <div className="flex flex-col items-center text-center space-y-3 pt-2">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-1" />
            Kembali ke Beranda Utama
          </a>

          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Go Global Indonesia. Hak Cipta Dilindungi.
          </p>
        </div>
      </div>
    </div>
  )
}

