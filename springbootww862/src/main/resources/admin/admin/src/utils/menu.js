const menu = {
    list() {
        return [{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"人事安排","menuJump":"列表","tableName":"renshianpai"}],"menu":"人事安排管理"},{"child":[{"buttons":["新增","查看","修改","删除","审核"],"menu":"考勤","menuJump":"列表","tableName":"kaoqin"}],"menu":"考勤管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"工资","menuJump":"列表","tableName":"gongzi"}],"menu":"工资管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"样板","menuJump":"列表","tableName":"yangban"}],"menu":"样板管理"},{"child":[{"buttons":["新增","查看","修改","删除","报表","入库"],"menu":"成品检验","menuJump":"列表","tableName":"chengpinjianyan"}],"menu":"成品检验管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"订单","menuJump":"列表","tableName":"dingdan"}],"menu":"订单管理"},{"child":[{"buttons":["新增","查看","修改","删除","入库","出库"],"menu":"原料仓库","menuJump":"列表","tableName":"yuanliaocangku"}],"menu":"原料仓库管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"原料入库","menuJump":"列表","tableName":"yuanliaoruku"}],"menu":"原料入库管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"原料出库","menuJump":"列表","tableName":"yuanliaochuku"}],"menu":"原料出库管理"},{"child":[{"buttons":["查看","修改","删除","新增","出库"],"menu":"成衣仓库","menuJump":"列表","tableName":"chengyicangku"}],"menu":"成衣仓库管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"成衣出库","menuJump":"列表","tableName":"chengyichuku"}],"menu":"成衣出库管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"系统公告","tableName":"news"},{"buttons":["查看","修改"],"menu":"轮播图管理","tableName":"config"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"人事安排列表","menuJump":"列表","tableName":"renshianpai"}],"menu":"人事安排模块"},{"child":[{"buttons":["查看"],"menu":"样板列表","menuJump":"列表","tableName":"yangban"}],"menu":"样板模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"考勤","menuJump":"列表","tableName":"kaoqin"}],"menu":"考勤管理"},{"child":[{"buttons":["查看"],"menu":"工资","menuJump":"列表","tableName":"gongzi"}],"menu":"工资管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"人事安排列表","menuJump":"列表","tableName":"renshianpai"}],"menu":"人事安排模块"},{"child":[{"buttons":["查看"],"menu":"样板列表","menuJump":"列表","tableName":"yangban"}],"menu":"样板模块"}],"hasBackLogin":"否","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"}]
    }
}
export default menu;
