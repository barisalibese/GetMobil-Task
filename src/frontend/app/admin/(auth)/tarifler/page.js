import BaseApiService from "/app/apiService/BaseApiService";
 async function getData(){
    let apiService= new BaseApiService();
    let response= await apiService.getJSON('/admin/recipes');
    return response.data;
}
export default async function getIngredients() {
        let data = await getData();
    return (
        <div className="kt-container  kt-grid__item kt-grid__item--fluid">
            <div className="alert alert-light alert-elevate" role="alert">
                <div className="alert-icon">
                    <i className="flaticon-warning kt-font-brand" />
                </div>
                <div className="alert-text">
                    The foundation for DataTables is progressive enhancement, so it is very
                    adept at reading table information directly from the DOM. This example
                    shows how easy it is to add searching, ordering and paging to your HTML
                    table by simply running DataTables on it. See official documentation{" "}
                    <a
                        className="kt-link kt-font-bold"
                        href="https://datatables.net/examples/data_sources/dom.html"
                        target="_blank"
                    >
                        here
                    </a>
                    .
                </div>
            </div>
            <div className="kt-portlet kt-portlet--mobile">
                <div className="kt-portlet__head kt-portlet__head--lg">
                    <div className="kt-portlet__head-label">
        <span className="kt-portlet__head-icon">
          <i className="kt-font-brand flaticon2-line-chart" />
        </span>
                        <h3 className="kt-portlet__head-title">HTML(DOM) Sourced Data</h3>
                    </div>
                    <div className="kt-portlet__head-toolbar">
                        <div className="kt-portlet__head-wrapper">
                            <div className="kt-portlet__head-actions">
                                <a href="/admin/tarifler/ekle" className="btn btn-brand btn-elevate btn-icon-sm">
                                    <i className="la la-plus" />
                                    Yeni Ekle
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="kt-portlet__body">
                    {/*begin: Datatable */}
                    <table
                        className="table table-striped- table-bordered table-hover table-checkable"
                        id="kt_table_1"
                    >
                        <thead>
                        <tr>
                            <th>Malzeme ID</th>
                            <th>Tarif Adı</th>
                            <th>Tarif Resmi</th>
                            <th>İşlemler</th>
                        </tr>
                        </thead>
                        <tbody>
                        {data.map((value,key)=>(
                            <tr>
                            <td> {key+1}</td>
                            <td> {value.name}</td>
                            <td><img src={'http://localhost:8087/storage/uploads/images/'+value.image_url} width="100px" height="100px" alt=""/></td>
                            <td>
                                <a className="btn btn-primary" href={'/admin/tarifler/'+value.id}><i className="fa fa-edit"></i>Güncelle</a>
                            </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}
