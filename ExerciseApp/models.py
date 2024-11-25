# nome_do_app/models.py
from django.db import models

class Pokemon(models.Model):
    nome = models.CharField(max_length=100)
    tipo = models.CharField(max_length=50)
    descricao = models.TextField()
    foto = models.ImageField(upload_to='fotos_pokemon/')

    def __str__(self):
        return self.nome
