from rest_framework import serializers
from .models import Medicamento

class MedicamentoSerializer(serializers.ModelSerializer):
    # Retorna a URL completa do backend
    foto = serializers.SerializerMethodField()

    class Meta:
        model = Medicamento
        fields = '__all__'

    def get_foto(self, obj):
        request = self.context.get('request')
        if obj.foto and request:
            return request.build_absolute_uri(obj.foto.url)
        return None