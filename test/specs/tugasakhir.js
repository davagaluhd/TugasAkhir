describe('User Open Application',() => {
    it('User can open diet meal apps ', async() => {
        await expect($('[text="Welcome..."]')).toHaveText("Welcome...");
        await expect($('[id="com.fghilmany.dietmealapp:id/tv_header_desc"]')).toHaveText("Isi formulir untuk membuat/menambahkan user");      
    })
  })
  
  describe('User Fill Personal Info',() => {
    it('User can input name', async() => {
        await $('[id="com.fghilmany.dietmealapp:id/et_name"]').setValue("Dava");
    })
    it('User can input weight: 50', async() => {
        await $('[id="com.fghilmany.dietmealapp:id/et_weight"]').setValue(50);
    })
    it('User can input height: 165', async() => {
        await $('[id="com.fghilmany.dietmealapp:id/et_height"]').setValue(158);
    })
    it('User can choose gender: Female', async() => {
        await $('[id="com.fghilmany.dietmealapp:id/rb_female"]').click();
    })
    it('User can click button "NEXT"', async() => {
        await $('[id="com.fghilmany.dietmealapp:id/bt_next"]').click();
        await expect($('[id="com.fghilmany.dietmealapp:id/tv_header_desc"]')).toHaveText("Isi formulir untuk membuat/menambahkan user"); 
        await expect($('[id="com.fghilmany.dietmealapp:id/title_activity"]')).toHaveText("Aktivitas sehari-hari"); 
    })
  })
  
  describe('User Submit Form Activity',() => {
    it('User can choose form "Aktivitas sehari-hari"', async() => {
        await $('[text="Sekolah, Kuliah, Kerja Kantor, dsj."]').click();
    })
    it('User can click button "SELESAI"', async() => {
        await $('[id="com.fghilmany.dietmealapp:id/bt_finish"]').click();
        await expect($('[text="Ready to some calories today?"]')).toHaveText("Ready to some calories today?");
    })  
  })