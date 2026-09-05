"use client";

import {
  MessageCircle,
  ArrowRight,
  PaintRoller,
  Building2,
  Home as HomeIcon,
  Sparkles,
} from "lucide-react";

const WHATSAPP = "5524999274148";

const INSTAGRAM =
  "https://www.instagram.com/3dpinturas_tiagoaraujo?stkn=MWd1cmR0bXM1M3dqNw==";

const wa = (text: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;

/* Ícone do Instagram */
function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="18" height="18" x="3" y="3" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle
        cx="17.5"
        cy="6.5"
        r="1"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

export default function Home() {
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    const mensagem = `Olá! Gostaria de solicitar um orçamento.

Nome: ${data.get("nome")}
Tipo: ${data.get("tipo")}
Serviço: ${data.get("servico")}
Mensagem: ${data.get("mensagem") || "Não informado"}`;

    window.open(
      wa(mensagem),
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <>
      {/* HEADER */}
      <nav>
        <div className="wrap nav">
          <a
            href="#inicio"
            className="brand"
            aria-label="3 D Pinturas - Página inicial"
          >
            3 D PINTURAS.
          </a>

          <div className="links">
            <a href="#servicos">Serviços</a>
            <a href="#projetos">Projetos</a>
            <a href="#contato">Contato</a>

            <a
              className="btn primary"
              href={wa(
                "Olá! Gostaria de solicitar um orçamento de pintura.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Solicitar orçamento pelo WhatsApp"
            >
              <MessageCircle size={18} />
              <span>Orçamento</span>
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* HERO */}
        <section className="hero" id="inicio">
          <div className="wrap">
            <div className="eyebrow">
              Pintura residencial & comercial
            </div>

            <h1>
              Cor, acabamento e cuidado em cada ambiente.
            </h1>

            <p className="hero-description">
              Transformamos casas, apartamentos, escritórios e
              estabelecimentos com preparação criteriosa e acabamento
              profissional.
            </p>

            <div className="hero-actions">
              <a
                className="btn primary"
                href={wa(
                  "Olá! Vi o site da 3 D Pinturas e gostaria de solicitar um orçamento.",
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={19} />
                <span>Solicitar orçamento</span>
              </a>

              <a className="btn secondary" href="#projetos">
                <span>Ver trabalhos</span>
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>

        {/* SERVIÇOS */}
        <section className="section" id="servicos">
          <div className="wrap">
            <div className="eyebrow">
              O que fazemos
            </div>

            <h2>
              Soluções de pintura para cada espaço.
            </h2>

            <div className="grid">
              <article className="card">
                <HomeIcon size={30} />

                <h3>Pintura residencial</h3>

                <p>
                  Interiores e fachadas de casas e apartamentos.
                </p>
              </article>

              <article className="card">
                <Building2 size={30} />

                <h3>Pintura comercial</h3>

                <p>
                  Lojas, escritórios, condomínios e ambientes
                  corporativos.
                </p>
              </article>

              <article className="card">
                <PaintRoller size={30} />

                <h3>Preparação e acabamento</h3>

                <p>
                  Correções, massa, lixamento e acabamento cuidadoso.
                </p>
              </article>

              <article className="card">
                <Sparkles size={30} />

                <h3>Texturas e efeitos</h3>

                <p>
                  Acabamentos decorativos para destacar seus ambientes.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* PORTFÓLIO */}
        <section
          className="section portfolio-section"
          id="projetos"
        >
          <div className="wrap">
            <div className="eyebrow">
              Portfólio
            </div>

            <h2>
              Trabalhos que falam pelo acabamento.
            </h2>

            <div className="projects">
              {[
                "Sala residencial",
                "Fachada comercial",
                "Apartamento",
                "Área externa",
              ].map((project, index) => (
                <article
                  className="project"
                  key={project}
                >
                  <div className="project-content">
                    <small>
                      PROJETO 0{index + 1}
                    </small>

                    <h3>{project}</h3>

                    <span>
                      Em breve, fotos reais dos nossos trabalhos.
                    </span>
                  </div>
                </article>
              ))}
            </div>

            {/* CTA INSTAGRAM */}
            <div className="portfolio-instagram">
              <p>
                Quer acompanhar mais trabalhos e novidades?
              </p>

              <a
                className="instagram-cta"
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ver mais trabalhos da 3 D Pinturas no Instagram"
              >
                <InstagramIcon size={20} />

                <span>
                  Veja mais trabalhos no Instagram
                </span>

                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>

        {/* CONTATO */}
        <section
          className="section"
          id="contato"
        >
          <div className="wrap contact">
            <div className="contact-content">
              <div className="eyebrow">
                Orçamento
              </div>

              <h2>
                Conte sobre seu projeto.
              </h2>

              <p>
                Preencha os dados e o pedido será preparado
                automaticamente para envio pelo WhatsApp.
              </p>

              <p className="contact-support">
                Quanto mais detalhes você informar, melhor poderemos
                entender o serviço desejado.
              </p>
            </div>

            <form onSubmit={submit}>
              <label
                className="sr-only"
                htmlFor="nome"
              >
                Seu nome
              </label>

              <input
                id="nome"
                name="nome"
                type="text"
                placeholder="Seu nome"
                autoComplete="name"
                required
              />

              <label
                className="sr-only"
                htmlFor="tipo"
              >
                Tipo de imóvel
              </label>

              <select
                id="tipo"
                name="tipo"
                required
                defaultValue=""
              >
                <option value="" disabled>
                  Tipo de imóvel
                </option>

                <option value="Residencial">
                  Residencial
                </option>

                <option value="Comercial">
                  Comercial
                </option>

                <option value="Condomínio">
                  Condomínio
                </option>
              </select>

              <label
                className="sr-only"
                htmlFor="servico"
              >
                Serviço desejado
              </label>

              <input
                id="servico"
                name="servico"
                type="text"
                placeholder="Serviço desejado"
                required
              />

              <label
                className="sr-only"
                htmlFor="mensagem"
              >
                Descrição do serviço
              </label>

              <textarea
                id="mensagem"
                name="mensagem"
                placeholder="Descreva o ambiente, metragem aproximada e o que deseja fazer"
              />

              <button
                className="btn primary form-submit"
                type="submit"
              >
                <span>Enviar pelo WhatsApp</span>
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* WHATSAPP FLUTUANTE */}
      <a
        className="floating"
        href={wa(
          "Olá! Gostaria de solicitar um orçamento de pintura.",
        )}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Solicitar orçamento pelo WhatsApp"
      >
        <MessageCircle size={19} />
        <span>WhatsApp</span>
      </a>

      {/* FOOTER */}
      <footer>
        <div className="wrap footer-content">
          <div className="footer-info">
            <strong>3 D PINTURAS.</strong>

            <span>
              © 2026 — Residencial & Comercial.
            </span>
          </div>

          <a
            className="footer-instagram"
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Acessar Instagram da 3 D Pinturas"
          >
            <InstagramIcon size={18} />

            <span>
              @3dpinturas_tiagoaraujo
            </span>
          </a>
        </div>
      </footer>
    </>
  );
}