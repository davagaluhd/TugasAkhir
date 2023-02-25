describe('User Open Application',() => {
    it('User can open diet meal apps ', async() => {
        await expect($('[text="Welcome..."]')).toHaveText("Welcome...");
        await expect($('[id="com.fghilmany.dietmealapp:id/tv_header_desc"]')).toHaveText("Isi formulir untuk membuat/menambahkan user");      
    })
  })
  
  describe('User Submit Form Data Application',() => {
    it('User can input field name', async() => {
        await $('[text="Name"]').setValue("Dava");
    })
    it('User can input field weight: 50', async() => {
        await $('[text="Weight"]').setValue(50);
    })
    it('User can input field height: 165', async() => {
        await $('[text="Height"]').setValue(158);
    })
    it('User can click choose option gender: Female', async() => {
        await $('[id="com.fghilmany.dietmealapp:id/rb_female"]').click();
    })
    it('User can click button "NEXT"', async() => {
        await $('[id="com.fghilmany.dietmealapp:id/bt_next"]').click();
        await expect($('[id="com.fghilmany.dietmealapp:id/tv_header_desc"]')).toHaveText("Isi formulir untuk membuat/menambahkan user"); 
        await expect($('[id="com.fghilmany.dietmealapp:id/title_activity"]')).toHaveText("Aktivitas sehari-hari"); 
    })
  })
  
  describe('User Submit Form Activity',() => {
    it('User can choose option aktivitas sehari-hari', async() => {
        await $('[text="Sekolah, Kuliah, Kerja Kantor, dsj."]').click();
    })
    it('User can click button "SELESAI"', async() => {
        await $('[id="com.fghilmany.dietmealapp:id/bt_finish"]').click();
        await expect($('[text="Ready to some calories today?"]')).toHaveText("Ready to some calories today?");
    })  
  })