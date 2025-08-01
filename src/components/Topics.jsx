export default function Topics({accepted}) {
    const topics = [
        "O Player ao ser transferido para o COMPLEXO GG não perderá a sua Allowlist no COMPLEXOXP",
        "A Allowlist só será perdida caso o player não logue no servidor por mais de 2 semanas. Caso esteja ausente por estar focado no Complexo GG, só será possível retornar refazendo a Entrevista",
        "Caso o player retorne ao XP depois da sua transferência somente para causar problemas, quebrar regras, causar alvoroço ou ficar contando vantagem de ter conseguido a migração, o player está sujeito a perder a Allowlist tanto no Complexo GG quanto no ComplexoXP",
        "Todos os aprovados terão que participar de um alinhamento com a equipe do ComplexoGG antes de conseguirem logar no servidor. A data é marcada somente pela equipe do ComplexoGG. A equipe do ComplexoXP não dá previsão de datas e não avisará quando esse alinhamento será marcado, tudo fica a par da equipe do GG",
        "Todos os itens VIP adquiridos por coins no CPXXP como carros, skins, boxes etc não serão transferidos para o ComplexoGG. Caso o player queira itens VIPs lá, ele deverá adquiri-los novamente",
        "O rumo do personagem no CPXGG não necessariamente deve seguir o mesmo rumo do CPXXP. O player é livre para fazer o que quiser no GG",
        "Caso o player participe do RP de despedida, este deve estar ciente que se fizer algum RP ruim durante a atividade, ele ainda pode perder a sua vaga no GG",
        "Caso o player perca a Allowlist no GG por algum motivo, o tempo que esteve lá não contará para o XP. Caso ele queira retornar para o GG pelo processo de migração, ele deverá ficar 1 mês ativo no servidor e 1 mês e meio sem banimentos",
    ]

    return (
        <div className="flex flex-col items-center gap-2">
            {!accepted ? (
                <>
                    <div className="text-lg font-bold text-center text-white px-3 py-2">
                        <h1>Parabéns! você acaba de ser aprovado no processo de migração do CPXXP para o CPXGG!</h1>
                        <h1 className="text-base">Antes de prosseguirmos, você deverá ler com atenção os termos a seguir e concordar com eles ao final da leitura!</h1>
                    </div>
                    <div className="flex flex-col text-white text-justify gap-2">
                        {topics.map((key, index) => (
                            <div key={index} className="flex gap-3 items-center">
                                <h1 className="text-[2.5rem] text-zinc-600 font-bold">{index+1}</h1>
                                <h1 className="flex items-center bg-zinc-700 p-2 rounded-md w-full min-h-16">{key}</h1>
                            </div>
                        ))}
                    </div> 
                </>
            ) : (
                <h1 className="text-white font-bold text-2xl">Você já assinou este termo</h1>
            )}
        </div>
    )
}