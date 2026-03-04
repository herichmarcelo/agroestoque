import os
from django.db import models
from django.utils.text import slugify  # para transformar o nome em algo seguro para arquivos

# Função que define o nome do arquivo da foto baseado no nome do medicamento
def renomear_foto_medicamento(instance, filename):
    # Pega a extensão do arquivo (png, jpg etc)
    ext = filename.split('.')[-1]
    # Cria um nome seguro baseado no nome do medicamento (ex: "Paracetamol 500mg" -> "paracetamol-500mg.png")
    nome_arquivo = f"{slugify(instance.nome)}.{ext}"
    # Retorna o caminho completo dentro da pasta 'fotos_medicamentos'
    return os.path.join('fotos_medicamentos', nome_arquivo)


class Medicamento(models.Model):
    nome = models.CharField(max_length=200)
    # Modificação aqui: usamos a função renomear_foto_medicamento no upload_to
    foto = models.ImageField(upload_to=renomear_foto_medicamento, null=True, blank=True)
    categoria = models.CharField(max_length=200)
    unidade_medida = models.CharField(max_length=50)
    lote = models.CharField(max_length=100)
    validade = models.DateField()
    carencia_dias = models.IntegerField(null=True, blank=True)
    quantidade = models.IntegerField()
    dias_ate_vencimento = models.IntegerField(null=True, blank=True)
    
    def __str__(self):
        return self.nome