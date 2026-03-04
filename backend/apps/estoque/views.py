from rest_framework import viewsets
from .models import Medicamento
from .serializers import MedicamentoSerializer


class MedicamentoViewSet(viewsets.ModelViewSet):
    queryset = Medicamento.objects.all().order_by('-id')
    serializer_class = MedicamentoSerializer