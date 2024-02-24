function Animacao(context) {
    this.context = context;
    this.sprites = [];
    this.ligado = false;
}
Animacao.prototype = {
    novoSprite: function(sprite){
        this.sprites.push(sprite);
    },
    ligar: function(){
        this.ligado = true;
        this.proximoFrame();
    },
    // Não esqueça dessa vírgula sempre que for criar um novo método 

    desligar: function() {
        this.ligado = false;
    },

    proximoFrame: function(){
        // Posso continuar?
        if ( ! this.ligado ) return;

        // A cada ciclo, limpamos a tela ou desenhamos um fundo
        this.limparTela();

        // Atualizamos o estado das sprites
        for (var i in this.sprites)
        this.sprites[i].atualizar();
        
        // Desenhamos as sprites
        for(var i in this.sprites)
        this.sprites[i].desenhar();

        // Chamamos o próximo ciclo
        var animacao = this;
        requestAnimationFrame(function(){
            animacao.proximoFrame();
        })
    },

    limparTela: function(){
        var ctx = this.context; // Só para facilitar a escrita 
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }
}