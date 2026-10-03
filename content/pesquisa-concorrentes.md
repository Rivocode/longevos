# Pesquisa: concorrentes e quiz atual

Levantamento feito em 03/10/2026, só para análise. Nenhuma imagem ou texto de concorrente foi copiado.

## Concorrentes locais (João Pessoa)

| Nome | Onde | Posicionamento | Observações |
|---|---|---|---|
| [Instituto Biodelta](https://biodelta.com.br/unidade-biodelta-joao-pessoa/) | Miramar (mesmo bairro da nova unidade) | "Do Atleta ao Idoso Debilitado", musculação terapêutica com médico e fisioterapeuta | Tom clínico, paleta azul. CTA só por WhatsApp. Contadores quebrados ("0+"), sem preços, sem FAQ |
| [Academia Gaviões, programa Idosos](https://www.academiagavioes.com.br/modalidades/idosos) | Rede com unidade em JP | "Chegar à melhor idade não limita você" | Página genérica, quase sem prova social |
| Estúdios de pilates (Number 1, Vivance e outros) | Manaíra, Tambaú, Bessa | Pilates para idosos | Só Instagram e Wellhub, competem por preço (a partir de R$ 199,99 pelo Wellhub) |

## Referências nacionais 50+

| Nome | Destaque |
|---|---|
| [40+ Academia](https://www.40mais.com.br/) | Turmas de no máximo 8 alunos com 2 instrutores, depoimentos com nome e "aluno desde 2013", formulário de matrícula por unidade |
| [Estúdio Fly](https://estudiofly.com.br/) | "Academia de gente grande", aula experimental grátis, garantia de resultado, narrativa emocional |
| [Senior Gym](https://seniorgym.com.br/) | Planos vendidos como programas com prazo ("Desafio 45 dias", "Programa 100 dias"), FAQ forte de objeções |

## O que o mercado já faz

- WhatsApp é o CTA principal, quase sempre fixo na tela.
- A promessa central é segurança: avaliação inicial, turma pequena, fisioterapeuta.
- Quase ninguém mostra preço. Depoimentos são curtos, em texto, e vídeo é raro.

## Onde a Longevos pode se destacar

- Em João Pessoa ninguém tem landing page dedicada ao público 50+.
- A Biodelta fala em "idoso debilitado". A Longevos ocupa o lado aspiracional e social: dança, comunidade e vitalidade.
- A equipe multidisciplinar (educador físico, fisioterapeuta e nutricionista) e a acupuntura raramente aparecem juntas.
- Qualquer prova real já destaca a Longevos: vídeo de aluno, rosto da equipe, preço "a partir de".

## Próximos itens recomendados (dependem do cliente)

1. Fotos e vídeos reais de alunos, que hoje temos apenas como renders do projeto Miramar.
2. Equipe com foto, nome e registro (CREF, CREFITO, CRN).
3. 2 ou 3 depoimentos em vídeo curto, com nome, idade e tempo de casa.
4. Confirmar se existe aula experimental grátis ou primeira semana sem compromisso.
5. Informar horários, estacionamento e acessibilidade das duas unidades.

## Quiz atual (quiz.somoslongevos.com.br/lancamento)

São 11 telas e o fluxo termina com o botão "Falar no WhatsApp":

- Pede nome, telefone e e-mail logo no início. É ali que mais gente desiste.
- Depois vêm perfil (+60, +50 ou familiar), objetivo, interesse (musculação ou pilates), frequência de exercício e período (manhã ou tarde).
- Cada resposta é salva no servidor a cada tela, por POST em `/quiz/1/lancamento`, com Facebook Pixel.

Na nossa versão (`/quiz`), as perguntas vêm primeiro e o contato fica no final. Também acrescentamos a pergunta "unidade preferida". O resultado é personalizado e abre o WhatsApp com as respostas já escritas na mensagem.

> Durante a análise ficou registrado um lead de teste no sistema atual: **"Teste Rivocode"**, **+55 83 99999-0000**, **teste@rivocode.dev**. Vale mencionar na apresentação para que eles apaguem.
