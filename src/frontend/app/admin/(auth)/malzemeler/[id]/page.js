import {updateIngredient} from "/app/admin/form-actions/ingredients";
import BaseApiService from "../../../../apiService/BaseApiService";
async function getData(id){
    let apiService= new BaseApiService();
    let response= await apiService.getJSON('/admin/ingredients/'+id);
    return response.data;
}
export default async function UpdateIngredient({params}) {
    let data= await getData(params.id)
    return (
        <div className="kt-container  kt-grid__item kt-grid__item--fluid">
            <div className="kt-portlet">
                <div className="kt-portlet__head">
                    <div className="kt-portlet__head-label">
                        <h3 className="kt-portlet__head-title">
                            Basic Form Layout
                        </h3>
                    </div>
                </div>
                <form className="kt-form" action={updateIngredient}>
                    <div className="kt-portlet__body">
                        <input name="id" type="hidden" value={params.id}/>
                        <input name="_method" type="hidden" value="PUT"/>
                        <div className="kt-section kt-section--first">
                            <div className="form-group">
                                <label>Malzeme Adı:</label>
                                <input type="text" className="form-control" defaultValue={data?.name} name="name" placeholder="Malzeme Adı"/>
                                <span className="form-text text-muted"> Lütfen Malzeme Adını Giriniz</span>
                            </div>
                            <div className="form-group">
                                <label>Malzeme Resmi</label>
                                <div className="custom-file">
                                    <input type="file" className="custom-file-input" name="file" id="file" accept=".jpg,.jpeg,.bmp,.png,.gif"/>
                                    <label className="custom-file-label" htmlFor="file">Malzeme Resmi</label>
                                </div>
                                <img src={"http://localhost:8087/storage/uploads/images/"+data?.image_url} width="200px" height="200px" />
                            </div>
                            <div className="form-group">
                                <label>Malzeme Değeri:</label>
                                <input type="text" className="form-control" name="value" defaultValue={data?.value} placeholder="Malzeme Değeri"/>
                                <span className="form-text text-muted">Lütfen Malzeme Değerini Giriniz</span>
                            </div>
                            <div className="form-group">
                                <label htmlFor="type">Malzeme Tipi</label>
                                <select className="form-control" id="type" name="type" defaultValue={data?.type}>
                                    <option value="Adet">Adet</option>
                                    <option value="Gram">Gram</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="kt-portlet__foot">
                        <div className="kt-form__actions">
                            <button type="submit" className="btn btn-primary">Submit</button>
                            <button type="reset" className="btn btn-secondary">Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
