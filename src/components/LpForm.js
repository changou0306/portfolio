"use client";

import { useState } from "react";

export default function LpForm() {
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errors, setErrors] = useState({});

  const validate = (data) => {
    const e = {};
    if (!data.get("company")) e.company = "この項目は必須です。";
    if (!data.get("name")) e.name = "この項目は必須です。";
    const email = data.get("email");
    if (!email) e.email = "この項目は必須です。";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      e.email = "正しいメールアドレスを入力してください。";
    if (!data.get("agreement")) e.agreement = "プライバシーポリシーへの同意が必要です。";
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const errs = validate(fd);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus("loading");
    // Demo: simulate API call
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("success");
    e.target.reset();
  };

  const inputCls =
    "w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg text-base transition-colors focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10";
  const errorCls = "text-red-500 text-sm mt-1";

  return (
    <section id="form" className="py-16 bg-slate-50">
      <div className="max-w-[600px] mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-3 text-slate-900">
          無料トライアル申し込み
        </h2>
        <p className="text-center text-slate-500 mb-8">
          下記フォームにご入力いただくと、すぐにトライアルアカウントを発行いたします。
        </p>

        {status === "success" && (
          <div className="bg-emerald-50 border border-emerald-400 text-emerald-800 p-4 rounded-lg mb-6">
            <h4 className="font-semibold mb-1">
              <i className="fas fa-check-circle mr-1" /> 申し込み完了！
            </h4>
            <p className="text-sm">
              トライアルアカウントの情報を5分以内にメールでお送りします。
            </p>
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-sm space-y-5"
        >
          {/* 会社名 */}
          <div>
            <label className="block font-medium text-slate-700 mb-1">
              会社名 <span className="text-red-500">*</span>
            </label>
            <input name="company" className={inputCls} />
            {errors.company && <p className={errorCls}>{errors.company}</p>}
          </div>

          {/* 名前 + 役職 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium text-slate-700 mb-1">
                お名前 <span className="text-red-500">*</span>
              </label>
              <input name="name" className={inputCls} />
              {errors.name && <p className={errorCls}>{errors.name}</p>}
            </div>
            <div>
              <label className="block font-medium text-slate-700 mb-1">
                役職
              </label>
              <input name="position" className={inputCls} />
            </div>
          </div>

          {/* メール */}
          <div>
            <label className="block font-medium text-slate-700 mb-1">
              メールアドレス <span className="text-red-500">*</span>
            </label>
            <input name="email" type="email" className={inputCls} />
            {errors.email && <p className={errorCls}>{errors.email}</p>}
          </div>

          {/* 電話 */}
          <div>
            <label className="block font-medium text-slate-700 mb-1">
              電話番号
            </label>
            <input name="phone" type="tel" className={inputCls} />
          </div>

          {/* 従業員数 */}
          <div>
            <label className="block font-medium text-slate-700 mb-1">
              従業員数
            </label>
            <select name="employees" className={inputCls}>
              <option value="">選択してください</option>
              <option value="1-10">1-10名</option>
              <option value="11-50">11-50名</option>
              <option value="51-100">51-100名</option>
              <option value="101-500">101-500名</option>
              <option value="501+">501名以上</option>
            </select>
          </div>

          {/* 興味のある機能 */}
          <div>
            <label className="block font-medium text-slate-700 mb-2">
              特に興味のある機能
            </label>
            <div className="grid grid-cols-2 gap-2">
              {["メール自動配信", "リアルタイム分析", "顧客管理", "SNS連携"].map(
                (f) => (
                  <label key={f} className="flex items-center gap-2 cursor-pointer text-slate-600">
                    <input type="checkbox" name="interest" value={f} className="accent-indigo-600" />
                    {f}
                  </label>
                )
              )}
            </div>
          </div>

          {/* メッセージ */}
          <div>
            <label className="block font-medium text-slate-700 mb-1">
              ご質問・ご要望
            </label>
            <textarea
              name="message"
              rows={4}
              className={inputCls}
              placeholder="現在のマーケティング課題やご質問があればお聞かせください"
            />
          </div>

          {/* 同意 */}
          <div>
            <label className="flex items-center gap-2 cursor-pointer text-slate-600">
              <input type="checkbox" name="agreement" className="accent-indigo-600" />
              <span>
                <a href="#" className="text-indigo-600 hover:underline">
                  プライバシーポリシー
                </a>
                に同意します <span className="text-red-500">*</span>
              </span>
            </label>
            {errors.agreement && <p className={errorCls}>{errors.agreement}</p>}
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className={`w-full py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 transition-all cursor-pointer ${
              status === "loading" ? "btn-loading" : ""
            }`}
          >
            <i className="fas fa-paper-plane mr-2" />
            無料トライアルに申し込む
          </button>

          <p className="text-center text-sm text-slate-400 mt-3">
            ※申し込み後、5分以内にトライアルアカウント情報をメールでお送りします。
          </p>
        </form>
      </div>
    </section>
  );
}
