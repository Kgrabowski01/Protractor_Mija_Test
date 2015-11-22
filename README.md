# Protractor_Mija_Test
Do zrobienia:

User Story #2589
Delete template action should be possible to undo.
Undo deleted template should set inactive flag to false and status to previous one (DEVELOPMENT, ACTIVE, ...).
- Nie dziala template delete.


User Story #2585
'Add new chapter and subchapter, 
- Nie potrafie kliknac elementu ktory jest ukryty.

-----------------------------------------------------

Nie kumam :

User Story #2587 -> Drag&drop within template content

-----------------------------------------------------
Problemy:

newChaptersModal - > 	Dlaczego dziala before / after gdy jest w beforeEach a nie dziala gdy jest poza.
			Klikniecie hidden element

filteringTest -> 	Sprawdzanie przed i po

ChangeTemplateState -> 	Sprawdzenie przed i po 

dragNDropToTemplate -> 	Wg. mnie w ogole nie dziala - drag&drop of templates to category (on list of templates)
			Druga czesc testu, dziala poprawnie - zgodnie z oczekiwaniami.

sortingColumnTest -> 	Nie dziala poprawnie na firefox, repetable widzi tylko 15 pierwszych template.
			Reszta jest pusta przez co sypie sie porownanie stanow przed i po sortowaniu.
			Sortowanie po revision wg. mnie zle dziala.
			Dodatkowe bledy w tym tescie powstaja poprzez inne mechanizmy sorowania pustych wartosci np. Protractor (1,2,3..,'') strona ('',1,2,3...)

-----------------------------------------------------
Wg. mnie nie działa:

- Live search, User Story #2577.
- Sortowanie po revision, User Story #2579. Version i revision maja te samo bindowanie.
- Template delete.
- Drag&drop of templates to category, User Story #2586.
