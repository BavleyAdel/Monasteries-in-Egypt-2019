//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Mahragan2019.Monastery.WebApi
{
    using System;
    using System.Collections.Generic;
    
    public partial class SaintTitle
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public SaintTitle()
        {
            this.SaintParagraphs = new HashSet<SaintParagraph>();
        }
    
        public int Id { get; set; }
        public string SaintTitle1 { get; set; }
        public int SaintHeaderId { get; set; }
        public string MediaSrc { get; set; }
    
        public virtual SaintHeader SaintHeader { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<SaintParagraph> SaintParagraphs { get; set; }
    }
}
