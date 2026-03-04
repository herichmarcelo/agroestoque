# 🧪 AgroEstoque

Sistema web para controle de estoque de medicamentos, desenvolvido com **Django (Backend)** e **React + TypeScript + TailwindCSS (Frontend)**.

Projeto focado em organização, visual moderno e estrutura escalável para evoluir para um sistema SaaS.

---

# 🚀 Tecnologias Utilizadas

## 🔙 Backend

* Python 3
* Django 6
* Django REST Framework
* SQLite (ambiente de desenvolvimento)
* CORS Headers
* Upload de imagens via `ImageField`

## 🔜 Frontend

* React
* TypeScript
* React Router
* TailwindCSS
* Fetch API

---

# 📦 Funcionalidades Implementadas

## ✅ Backend (Django)

* Model `Medicamento` com os campos:

  * nome
  * foto (upload de imagem)
  * categoria
  * unidade_medida
  * lote
  * validade
  * carencia_dias
  * quantidade
  * dias_ate_vencimento

* API REST para listagem de medicamentos

* Configuração de MEDIA_URL para servir imagens

* Integração com frontend via CORS

---

## ✅ Frontend (React)

* Página de estoque com:

  * Listagem dinâmica via API
  * Busca por nome
  * Ordenação alfabética
  * Cards de resumo (total, categorias, etc.)
  * Grid responsivo (mobile e desktop)
  * Layout moderno com Tailwind

* Sidebar responsiva com:

  * Overlay no mobile
  * Logo personalizada
  * Navegação ativa com destaque

* Integração de imagens do Django:

  * Suporte para URL relativa e absoluta
  * Fallback para placeholder

---

# 🖼 Estrutura de Imagens

As imagens são armazenadas em:

```
media/
└── fotos_medicamentos/
```

E são servidas via:

```
http://127.0.0.1:8000/media/...
```

Configuração no `settings.py`:

```python
MEDIA_URL = '/media/'
MEDIA_ROOT = BASE_DIR / 'media'
```

E no `urls.py`:

```python
from django.conf import settings
from django.conf.urls.static import static

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
```

---

# ⚙️ Como Rodar o Projeto

## 🔹 Backend

```bash
python manage.py migrate
python manage.py runserver
```

API disponível em:

```
http://127.0.0.1:8000/api/medicamentos/
```

---

## 🔹 Frontend

```bash
npm install
npm run dev
```

Aplicação disponível em:

```
http://localhost:5173
```

---

# 📊 Estrutura Atual do Projeto

```
Backend (Django)
├── apps/
│   └── estoque/
├── conf/
├── media/
└── db.sqlite3

Frontend (React)
├── pages/
│   └── EstoquePage.tsx
├── components/
│   └── Sidebar.tsx
```

---

# 🎯 Próximos Passos (Roadmap)

* [ ] Controle automático de estoque baixo
* [ ] Página de criação de item
* [ ] Página de saída (baixa de estoque)
* [ ] Dashboard com métricas
* [ ] Autenticação com JWT
* [ ] Deploy em produção

---

# 📌 Versão Atual

AgroEstoque v1.4 (ambiente de desenvolvimento)

---

# 👨‍💻 Autor

Projeto desenvolvido para estudo e evolução prática em:

* Integração Django + React
* Estruturação de APIs
* Design responsivo
* Arquitetura escalável

---

# 📄 Licença

Projeto para fins educacionais e desenvolvimento interno.
