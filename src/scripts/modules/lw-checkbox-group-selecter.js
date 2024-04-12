document.addEventListener("DOMContentLoaded", function () {
    const selecters = document.querySelectorAll(".lw-checkbox-group-head-control input");

    if(!selecters.length) return;

    selecters.forEach(selecter => {

      if(!selecter) return;

      const onClickToggleCheckboxes = (evt) => {
        const target = evt.target;
        const group = target.closest('.lw-checkbox-group__header').nextElementSibling;

        group.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
          if(target.checked) {
            checkbox.checked = true;

            const checkboxes = group.querySelectorAll('input[type="checkbox"]');

            const onClickChangeMainCheckboxState = () => {
              target.checked = false;

              checkboxes.forEach(checkbox => {
                checkbox.removeEventListener('change', onClickChangeMainCheckboxState);
              });
            }

            checkboxes.forEach(checkbox => {
              checkbox.addEventListener('change', onClickChangeMainCheckboxState);
            });
          } else {
            checkbox.checked = false;
          }
        });
      };

      selecter.addEventListener('change', onClickToggleCheckboxes);
    });
});
