import { redirect } from "next/navigation";

export default function Home() {
  redirect("/pages/chats");

  return <div>Aqui no se te ha perdido nada</div>;
}
