import Link from "next/link";

export default function VerifyRequest() {
  return (
    <dialog id="modal_1" className="modal modal-open w-screen">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Проверьте ваш почтовый ящик!</h3>
        <p className="py-4">
          Нажмите на ссылку в электронном письме, которое мы отправим на ваш
          почтовый ящик.
        </p>
        <div className="modal-action">
          <Link className="btn" href="/">
            На Главную
          </Link>
        </div>
      </div>
    </dialog>
  );
}
