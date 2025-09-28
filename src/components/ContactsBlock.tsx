export default function ContactsBlock() {
  return (
    <div className="text-center text-zinc-200 space-y-3">
      <h2 className="text-2xl font-bold text-[#e6d39a]">Contatti</h2>
      <p>In Cambio S.r.L.</p>
      <p>Viale di Villa Grazioli 1<br />00198 Roma (RM)</p>
      <p>P.IVA 16031581008</p>
      <p>
        Tel:{" "}
        <a href="tel:+393288410612" className="text-[#e6d39a] hover:underline">
          328 8410612
        </a>
      </p>
      <p>
        Email:{" "}
        <a href="mailto:info@incambio.eu" className="text-[#e6d39a] hover:underline">
          info@incambio.eu
        </a>
      </p>
    </div>
  );
}
