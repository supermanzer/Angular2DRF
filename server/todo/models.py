from django.db import models
from django.urls import reverse


# Create your models here.
class ToDo(models.Model):
    """Define a task or item we wish to accomplish."""
    date_created = models.DateTimeField(auto_now_add=True)
    created_by = models.ForeignKey(
        'auth.User', null=True, on_delete=models.SET_NULL,
        related_name='todos_created'
    )
    date_modified = models.DateTimeField(auto_now=True)
    modified_by = models.ForeignKey(
        'auth.User', null=True, on_delete=models.SET_NULL,
        related_name='todos_modified'
    )
    name = models.CharField(max_length=200)
    description = models.TextField(null=True, blank=True)
    due_date = models.DateTimeField(null=True, blank=True)
    completed = models.BooleanField(default=False)

    class Meta:
        app_label = 'todo'

    def __str__(self):
        if self.due_date:
            my_str = f'{self.name} - Due: {self.due_date}'
        else:
            my_str = f'{self.name}'
        return my_str

    def get_absolute_url(self):
        return reverse('todo-detail', self.id)
